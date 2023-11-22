let count = 0;
const targets = document.querySelectorAll(".box");
gsap.set(targets, { xPercent: -100 });
gsap.set(targets[0], { xPercent: 0 });

function slideIt() {
    gsap.to(targets[count], { xPercent: 100 });
    count = count < targets.length - 1 ? ++count : 0;
    gsap.fromTo(targets[count], { xPercent: -100 }, { xPercent: 0 });
    gsap.to({}, { duration: 2.5, onComplete: slideIt });
}

gsap.delayedCall(3, () => slideIt());