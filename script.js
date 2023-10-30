
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// let tl = gsap.timeline();
gsap.from("#nav .nav-left ",{
    y:20,
    duration:0.5,
    opacity:0,
    stagger:0.5

})
gsap.from("#nav .nav-right",{
    y:20,
    duration:0.5,
    opacity:0,
    stagger:0.5

})
gsap.from(".card",{
    y: 20,
    duration:.5,
    scale:1.2,
    opacity:0,
});
gsap.from(".second-p1",{
    x:500,
    duration:1,
    opacity:0,
})

let navmenu = document.getElementsByClassName("navmenu")[0];
let navlink = navmenu.getElementsByClassName("navmenu a")[0];
let nav_page = document.getElementsByClassName("nav-page")[0];
let count = 0;

navmenu.addEventListener("click", function () {
  if (count === 0) {
    nav_page.style.display = "block";
    count++;
  } else {
    nav_page.style.display = "none";
    count = 0;
  }
});

