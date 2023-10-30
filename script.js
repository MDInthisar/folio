
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