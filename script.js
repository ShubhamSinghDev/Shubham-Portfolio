const navbar=document.getElementById("navbar");
const burger=document.getElementById("burger");
const menu=document.getElementById("menu");
const bars=document.querySelector(".fa-bars");




// Theme toggle button
const toggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Load stored theme preference
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  themeIcon.classList.remove('fa-moon');
  themeIcon.classList.add('fa-sun');
}

// Toggle dark mode on click
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');

  if (isDark) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    localStorage.setItem('theme', 'dark');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    localStorage.setItem('theme', 'light');
  }
});


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