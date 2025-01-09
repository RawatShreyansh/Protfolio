const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

const tl = gsap.timeline();

tl.to(".content",{
    y:"100vh",
    scale: 0.6,
    duration:0
});

tl.to('.content', {
    y:"-50vh",
    duration: 1,
    delay:1,
});

tl.to('.content',{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:0.7
});