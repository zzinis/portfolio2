const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
const branch_btns = document.querySelectorAll(".store p"); 
const options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(37.508986, 126.889429), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
};

const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴


const markerOptions = [
    
    { 
        title: "본점", 
        latlng : new kakao.maps.LatLng(37.508986, 126.889429), 
        imgSrc : "img/point.png", 
        imgSize : new kakao.maps.Size(50, 40),
        imgPos : {offset: new kakao.maps.Point(28, 29)}, 
        button :  branch_btns[0]
    },
    {
        title: "지점1", 
        latlng : new kakao.maps.LatLng(37.527875, 127.041678), 
        imgSrc : "img/point.png", 
        imgSize : new kakao.maps.Size(50, 40),
        imgPos : {offset: new kakao.maps.Point(6, 49)}, 
        button :  branch_btns[1]
    },
    {
        title: "지점2",  
        latlng : new kakao.maps.LatLng(37.517103,126.9033973), 
        imgSrc : "img/point.png", 
        imgSize : new kakao.maps.Size(50, 40),
        imgPos : {offset: new kakao.maps.Point(58, 49)}, 
        button :  branch_btns[2]
    }
];


for(let i=0; i<markerOptions.length; i++){

    new kakao.maps.Marker({
        map:map,  
        position:markerOptions[i].latlng, 
        title:markerOptions[i].title, 
        image:new kakao.maps.MarkerImage(markerOptions[i].imgSrc,markerOptions[i].imgSize, markerOptions[i].imgPos)
    }); 

    markerOptions[i].button.onclick = function(e){
        e.preventDefault();
        moveTo(markerOptions[i].latlng); 

        for(let k=0; k<markerOptions.length; k++){
            markerOptions[k].button.classList.remove("on"); 
        }
        markerOptions[i].button.classList.add("on"); 
    }
}

function moveTo(target) {            

    var moveLatLon = target;

    map.setCenter(moveLatLon);
} 


window.onresize = ()=>{
    var active_btn = document.querySelector(".store p.on"); 
    var active_index = active_btn.getAttribute("data-index"); 
    console.log(active_index); 
    map.setCenter(markerOptions[active_index].latlng)
}


const t_on = document.querySelectorAll(".traffic li")[0];  
const t_off = document.querySelectorAll(".traffic li")[1]; 

t_on.addEventListener("click", function(e){
    e.preventDefault(); 

    map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC); 

    t_on.classList.add("on"); 
    t_off.classList.remove("on"); 
});


t_off.addEventListener("click", function(e){
    e.preventDefault(); 

    map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);  

    t_on.classList.remove("on"); 
    t_off.classList.add("on"); 
});


const mapTypeControl = new kakao.maps.MapTypeControl();

map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);


const zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);   



setDraggable(true); 

function setDraggable(draggable) {

    map.setDraggable(draggable);    
}


setZoomable(true); 

function setZoomable(zoomable) {
    map.setZoomable(zoomable);    
}

// $(".store p").on("click", function(e){
//     e.preventDefault();


    
// });


