const scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true});


  const page3=document.querySelector(".page31");
  const imgv=document.querySelector(".imagevala");

  page3.addEventListener("mouseenter",function(){
     imgv.style.display="block";
  })
  page3.addEventListener("mouseleave",function(){
    imgv.style.display="none";
 });


 var one=document.querySelectorAll(".one");
 one.forEach(function(e){
  e.addEventListener("mouseenter",function(){
    var image=e.getAttribute("data-image");
    imgv.style.backgroundImage=`url(${image})`;
  })
 });


 var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 5,
});

var menu=document.querySelector("nav h3");
var kalla=document.querySelector(".kalla");
var flag=0;
menu.addEventListener("click",function(){
  if(flag==0){
    kalla.style.top=0;
    flag=1;
  }else{
    kalla.style.top="-100%";
    flag=0;
  }
});
var loaderr=document.querySelector(".loaderr");
setTimeout(function(){
  loaderr.style.top="-120%";
},3400)


