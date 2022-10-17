const navIconEl = document.querySelector('.nav-icon');
const navCloseEl = document.querySelector('.nav-close');
const navList = document.querySelector(".navbar-nav");
const bgOverlay = document.querySelector(".nav_bgOverlay");
console.log(navList);

const navOpen = () =>{
  navList.classList.add('show');
  bgOverlay.classList.add('active');
  document.body.style = "visibility: visible ; width: 100vw; height: 100vh; overflow:hidden;";

};

const navClose = () => {
  navList.classList.remove('show');
  bgOverlay.classList.remove('active');
  document.body.style = "visibility: visible; width: 100%; height: initial ; overflowX: hidden;";
};
navIconEl.addEventListener('click',navOpen);
navCloseEl.addEventListener('click',navClose);

