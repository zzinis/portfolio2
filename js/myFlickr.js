$.ajax({
    url:"https://www.flickr.com/services/rest/?method=flickr.photos.search",
    dataType:"json", 
    data:{
        api_key:"fce3d5dec157a9b2bb0797070e4fd0b8", 
        per_page:12, 
        format:"json",
        nojsoncallback:1, 
        privacy_filter : 5, 
        tag_mode :"any",
        user_id : "193313784@N07" 
    }
})
.success(function(data){
    console.log(data.photos.photo); 
    let items = data.photos.photo; 

    $("#gallery").append("<ul>");

    $(items).each(function(index, data){
        let num = index+1;

        let text = data.title; 
        if(!data.title){
            text = "No description in this photo"; 
        }
        text = text.substr(0,32)

        $("#gallery ul")
            .append(
                $("<li>")
                    .append(
                        $("<p>").text(text)
                    )
                    .append(
                        $("<a>").attr({
                            href : "https://live.staticflickr.com/"+data.server+"/"+data.id+"_"+data.secret+"_b.jpg"
                        })
                        .append(

                            $("<img>").attr({
                                src : "https://live.staticflickr.com/"+data.server+"/"+data.id+"_"+data.secret+"_m.jpg"
                            })
                        )
                    )
                    
                    // .append(
                    //     $("<span>").text("0" + num + "/")
                    // )

                    .append(
                        $("<div class='profile'>")
                            .append(
                                $("<img>").attr({
                                    src : "https://www.flickr.com/buddyicons/"+data.owner+".jpg"
                                }),
                                $("<p>").text("0" + num +"/"),
                                $("<span>").text(data.owner)
                            )
                    )
            )
    })
    const total = $("#gallery ul li").length;
    let imgNum=0;

    $("#gallery img").each(function(index, data){   
        
        data.onload = function(){            
            imgNum++;
            console.log(imgNum);

            if(imgNum === total*2){   
                
                $(".loading").addClass("off");

                $("#gallery ul").addClass("on");
            }
        }        
    }); 
})
.error(function(err){
    console.err("???????????? ??????????????? ??????????????????"); 
})

$("body").on("click", "#gallery ul li", function(e){
    e.preventDefault();

    let imgSrc = $(this).children("a").attr("href");

    $("body").append(
        $("<div class = 'pop'>")
            .append(
                $("<img>").attr({src: imgSrc}),
                $("<span>").text("close")
            )
    )
});

$("body").on("click", ".pop span", function(){
    $(".pop").fadeOut(1000,function(){
        $(this).remove();
    })
});