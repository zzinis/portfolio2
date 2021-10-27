$.ajax({
    url:"https://www.googleapis.com/youtube/v3/playlistItems",
    dataType : 'jsonp',
    data :{
        part : "snippet",
        key: "AIzaSyBWdI1Ln_7CG7buBj84llJDk9-oaDu8NCE",
        maxResults :6,
        playlistId : "PL7bRBTzgXVleF23FJ2Y9VsfdVcDA4kg83"
    }
})
.success(function(data){
    let items = data.items;
    console.log(items);

    $(items).each(function(index, data){

        let txt = data.snippet.description;
        let len = txt.length;
        if(len>50){
            txt = txt.substr(0,50) + "..."
        }else{
            txt
        }

        let date = data.snippet.publishedAt;
        date = date.substr(0,10)

        $("#vidGallery")
            .append(
                $("<article>")
                .append(
                    $("<a>").attr({ href : data.snippet.resourceId.videoId})
                            .append(
                                $("<img>")
                                .attr({ 
                                    src : data.snippet.thumbnails.high.url
                                })
                            ),
                    $("<div class = 'con'>")
                                .append(
                                    $("<h2>").text(data.snippet.title),
                                    $("<p>").text(txt),
                                    $("<span>").text(date)
                                )
                )

                    

            )

    });

})
.error(function(err){
    console.log("데이터를 불러올 수 없습니다");
})


$("body").on("click", "#vidGallery article", function(e){
    e.preventDefault();

    let vidId = $(this).children("a").attr("href");
    $("body")
        .append(
            $("<div class = 'pop'>")
                .append(
                    $("<iframe>")
                        .attr({
                            src : "https://www.youtube.com/embed/"+vidId,
                            frameborder : 0,
                            width:"100%",
                            height:600
                        }),
                    $("<span>").text("close")    
                )
        )

});


$("body").on("click", ".pop span", function(){
    $(".pop").remove();
});

