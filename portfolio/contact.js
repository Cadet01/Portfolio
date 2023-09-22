////////preloader
const loader = document.querySelector('.preloader');
window.addEventListener("load",()=>{
  loader.style.display = 'none';
});

//////////hamburger
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
//nav background color 
const nav = document.querySelector('nav');
window.addEventListener('scroll',function(e){
  e.preventDefault();
  if(window.scrollY > 60){
    nav.style.position = 'fixed';
    nav.style.background = 'rgba(0,0,0,0.9)';
    nav.style.transition = '1s';
  } else{
    nav.style.position = '';
    nav.style.background = 'transparent';
    nav.style.transition = '3s';
  }
});
/////validating the form
const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function(e){
  e.preventDefault();

  const nameInput = document.getElementById("name").value;
  const emailInput = document.getElementById("email").value;
  const subjectInput = document.getElementById("subject").value;
  const messagesInput = document.getElementById("Message").value;

  if(nameInput === ""){
    alert("please enter name");
    return;
  }
  if(emailInput === ""){
    alert("please enter email");
    return;
  }
  myForm.reset();
});









///fadein animation aboutMe listener
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      document.querySelectorAll('.animated')[0].classList.add("fadeInLeft");
      document.querySelectorAll('.animated')[1].classList.add("fadeInRight");
    }
  })
})
observer.observe(document.querySelector(".contactCon"));

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