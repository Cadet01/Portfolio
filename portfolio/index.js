////////preloader
const loader = document.querySelector('.preloader');
window.addEventListener("load",()=>{
  loader.style.display = 'none';
});
/////////navbar
const navCon = document.querySelector('.navList');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click',()=>{
  hamburger.classList.toggle('active');
  navCon.classList.toggle('active');
})
document.querySelectorAll('.navlinks').forEach(n => n.addEventListener('click',() =>{
  hamburger.classList.remove('active');
  navCon.classList.remove('active');
}));
///to change the body background color
const toggle = document.querySelector('.ligthmode');
const body = document.querySelector('body');
const ligthMode = document.querySelector('.ligthmodeCon');
toggle.addEventListener("click", function() {
  this.classList.toggle("fa-moon");
  if(this.classList.toggle("fa-sun")){
    body.style.background = "#030c10";
    body.style.color = "rgb(165, 165, 165)";
    body.style.transition = "2s";
   ligthMode.style.background = 'whitesmoke';
    ligthMode.style.color = '#0b405b';
  } else{
    body.style.background = "whitesmoke";
    body.style.color = "#010101";
    body.style.transition = "2s";
    ligthMode.style.background = '#0b405b';
    ligthMode.style.color = 'whitesmoke';
  }
});
//nav background color 
const nav = document.querySelector('nav');
window.addEventListener('scroll',function(e){
  e.preventDefault();
  if(window.scrollY > 100){
    nav.style.position = 'fixed';
    nav.style.background = 'rgba(0,0,0,0.9)';
    nav.style.transition = '1s';
  } else{
    nav.style.position = '';
    nav.style.background = 'transparent';
    nav.style.transition = '3s';
  }
});
//////VALIDATING FORM

///fadein animation for home text
const headerObserver = new IntersectionObserver(entries => {
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      document.querySelectorAll('.headerAnimate')[0].classList.add("fadeInLeft");
    }
  })
})
headerObserver.observe(document.querySelector(".header-intro"));

///fadein animation for social
const socialObserver = new IntersectionObserver(entries => {
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      document.querySelectorAll('.socialAnimate')[0].classList.add("fadeInTop");
    }
  })
})
socialObserver.observe(document.querySelector("#particles-js"));


///fadein animation for aboutMe
const aboutObserver = new IntersectionObserver(entries => {
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      document.querySelectorAll('.aboutAnimate')[0].classList.add("fadeInTop");
    }
  })
})
aboutObserver.observe(document.querySelector(".about"));
///fadein animation aboutMe listener
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      document.querySelectorAll('.animated')[0].classList.add("fadeInLeft");
      document.querySelectorAll('.animated')[1].classList.add("fadeInRight");
    }
  })
})
observer.observe(document.querySelector(".aboutContainer"));

///fadein animation for skills
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      document.querySelectorAll('.skillAnimate')[0].classList.add("fadeInTop");
    }
  })
})
skillObserver.observe(document.querySelector(".skills"));
///fadein animation for skills progress
const skillProObserver = new IntersectionObserver(entries => {
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      document.querySelectorAll('.skillProAnimate')[0].classList.add("fadeInRight");
    }
  })
})
skillProObserver.observe(document.querySelector(".skills-intro"));


///fadein animation for skills progress
const serviceProObserver = new IntersectionObserver(entries => {
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      document.querySelectorAll('.serviceProAnimate')[0].classList.add("fadeInTop");
    }
  })
})
serviceProObserver.observe(document.querySelector(".services"));
///////fadein animation for service
const serviceObserver = new IntersectionObserver(entries => {
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      document.querySelectorAll('.serviceAnimate')[0].classList.add("fadeInLeft");
      document.querySelectorAll('.serviceAnimate')[1].classList.add("fadeInTop");
      document.querySelectorAll('.serviceAnimate')[2].classList.add("fadeInRight");
    }
  })
})
serviceObserver.observe(document.querySelector(".service-gridCon"));

///fadein animation for Portfolio
const porfolioProObserver = new IntersectionObserver(entries => {
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      document.querySelectorAll('.porfolioProAnimate')[0].classList.add("fadeInTop");
    }
  })
})
porfolioProObserver.observe(document.querySelector(".Portfolio"));
////fadeIn animation for porfolio
const portfolioObserver = new IntersectionObserver(entries => {
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      document.querySelectorAll('.porfolioAnimate')[0].classList.add("fadeInLeft");
      document.querySelectorAll('.porfolioAnimate')[1].classList.add("fadeInTop");
      document.querySelectorAll('.porfolioAnimate')[2].classList.add("fadeInRight");
      document.querySelectorAll('.porfolioAnimate')[3].classList.add("fadeInRight");
      document.querySelectorAll('.porfolioAnimate')[4].classList.add("fadeInRight");
      document.querySelectorAll('.porfolioAnimate')[5].classList.add("fadeInRight");
    }
  })
})
portfolioObserver.observe(document.querySelector(".porfolio-grid"));

///fadeIn animation for contact me
const contactProObserver = new IntersectionObserver(entries => {
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      document.querySelectorAll('.contactProAnimate')[0].classList.add("fadeInTop");
    }
  })
})
contactProObserver.observe(document.querySelector(".contact"));
///fadeIn animation for contact me
const contactObserver = new IntersectionObserver(entries => {
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      document.querySelectorAll('.contactAnimate')[0].classList.add("fadeInLeft");
      document.querySelectorAll('.contactAnimate')[1].classList.add("fadeInTop");
      document.querySelectorAll('.contactAnimate')[2].classList.add("fadeInRight");
    }
  })
})
contactObserver.observe(document.querySelector(".contact-detail"));

///fadeIn animation for Blog
const blogObserver = new IntersectionObserver(entries => {
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      document.querySelectorAll('.blogAnimate')[0].classList.add("fadeInTop");
    }
  })
})
blogObserver.observe(document.querySelector(".Blog"));
///fadeIn animation for Blog
const blogProObserver = new IntersectionObserver(entries => {
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      document.querySelectorAll('.blogProAnimate')[0].classList.add("fadeInLeft");
    }
  })
})
blogProObserver.observe(document.querySelector(".blog-intro"));
////fadein animation for blogExpansion
const blogExpObserver = new IntersectionObserver(entries => {
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      document.querySelectorAll('.blogExpAnimate')[0].classList.add("fadeInTop");
      document.querySelectorAll('.contactAnimate')[1].classList.add("fadeInTop");
      document.querySelectorAll('.contactAnimate')[2].classList.add("fadeInRight");
    }
  })
})
blogExpObserver.observe(document.querySelector(".blog-expansion"));
////////////////////////counter
/*
function countUp(){
  const object = document.querySelector('.counter1');
  let current = 0;
  const timer = setInterval(function(){
    object.textContent = current++;
    if(current >= 30){
      clearInterval(timer);
    }
  },100);
}
countUp("counting");

function countUpTwo(){
  const objectTwo = document.querySelector('.counter2');
  let currentTwo = 0;
  const timerTwo = setInterval(function(){
    objectTwo.textContent = currentTwo++;
    if(currentTwo >= 50){
      clearInterval(timerTwo);
    }
  },100);
}
countUpTwo("countTwo");



function countUpThree(){
  const objectThree = document.querySelector('.counter3');
  let currentThree = 0;
  const timerThree = setInterval(function(){
    objectThree.textContent = currentThree++;
    if(currentThree >= 11){
      clearInterval(timerThree);
    }
  },100);
}
countUpThree("countThree");

function countUpFour(){
  const objectFour = document.querySelector('.counter4');
  let currentFour = 0;
  const timerFour = setInterval(function(){
    objectFour.textContent = currentFour++;
    if(currentFour >= 25){
      clearInterval(timerFour);
    }
  },100);
}
countUpFour("countFour");
*///
/////observe the the countup number









////this is the filter button
const filterBtn = document.querySelectorAll(".portfolio-btn");
const filterCon = document.querySelectorAll(".prj");
///adding event listener to all the btn
filterBtn.forEach((button)=>{
  button.addEventListener('click',()=>{
    filterBtn.forEach((btn)=> btn.classList.remove("active-Pbtn"));
    button.classList.add("active-Pbtn");

    //// call all the button
  const category = button.getAttribute("data-filter");
  //
  filterCon.forEach((wrap)=>{
    if(category === "All" || wrap.classList.contains(category)){
      wrap.style.display = "block";
    }else{
      wrap.style.display = "none";
    }
  });


  });
});

