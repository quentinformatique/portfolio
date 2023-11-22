const TL = gsap.timeline({ paused: false });

TL.from(".line", {
    duration: 1,
    x: -500,
    opacity: 0,
    ease: Power2.easeInOut,
    stagger: .1
}).from(".first-section", {
    duration: 0.5,
    y: 500,
    opacity: 0,
    ease: Power2.easeInOut,
    stagger: .1
}, "-=1");

