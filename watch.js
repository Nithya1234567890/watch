var time=document.getElementById('display');
var timebtn=document.getElementById('time');
var value=time.innerHTML;
var black=document.getElementById('black');
var red=document.getElementById('red');
var gray=document.getElementById('gray');
var brown=document.getElementById('brown');
var image=document.getElementById('image-over');
var heart=document.getElementById('heart');
var timeinterval;
var heartInterval;
// console.log(timeinterval);
// console.log(value);
time.style.zIndex='4';
timebtn.onclick=function(){
    if(heartInterval!=0){
        clearInterval(heartInterval);
    time.style.textAlign="";
    time.style.marginTop="";
    time.style.marginLeft="";
    time.style.fontSize="2em";
    time.style.position="absolute";
    time.style.top="243px";
    time.style.left="68px";
    }
    time.innerHTML="";
    timeinterval=setInterval(display,1000);
}
function display(e){
    var date=new Date();
    // console.log(date);
    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
       if( h == 0 ) {  
            h = 12;  
       }  
       if( h > 12 ){  
            h = h - 12;  
       }  
       m = ( m < 10 ) ? m = "0" + m : m;  
       s = ( s < 10 ) ? s = "0" + s : s;  
    value=h+" : "+m+" : "+s;
    time.innerHTML=value;
    // console.log(value);
}
red.addEventListener('click',function(){
    // console.log(image);
    image.style.backgroundColor="red";
});
black.addEventListener('click',function(){
    // console.log(image);
    image.style.backgroundColor="black";
});
brown.addEventListener('click',function(){
    // console.log(image);
    image.style.backgroundColor="brown";
});
gray.addEventListener('click',function(){
    // console.log(image);
    image.style.backgroundColor="gray";
});
heart.onclick=function(){
    clearInterval(timeinterval);
    time.innerHTML="";
    image.style.backgroundColor="black";
    time.innerHTML="&#128148";
    image.style.color="red";
    time.style.position="absolute";
    time.style.textAlign="center";
    time.style.top="200px";
    time.style.left="85px";
    time.style.fontSize="80px";
    heartInterval=setInterval(function(){
        
        if(time.style.fontSize==="80px"){
            time.style.fontSize="100px";
            time.style.left="75px";
            time.style.top="190px";
        }
        else if(time.style.fontSize==="100px"){
            time.style.fontSize="80px";
            time.style.left="85px";
            time.style.top="200px";
        }
        
    },1000)
}