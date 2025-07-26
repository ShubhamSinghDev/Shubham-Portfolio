const navbar=document.getElementById("navbar");
const burger=document.getElementById("burger");
const menu=document.getElementById("menu");
const bars=document.querySelector(".fa-bars");

document.addEventListener("scroll",()=>{
    if(window.scrollY>0){
        navbar.classList.add("navbar-styling");
    } 
    else
        {
            navbar.classList.remove("navbar-styling");
        } 
});
burger.addEventListener("click",()=>{
    menu.classList.toggle   ("translate-x-0");
    bars.classList.toggle ("fa-xmark");
    
});

  var typed = new Typed('#typing', {
      strings: ['Developer','Freelancer','Designer','Coder'],
      typeSpeed: 100,
      loop:true,
      showCursor:false
    });