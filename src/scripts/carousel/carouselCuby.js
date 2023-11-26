let countCuby = 0;
const targets = document.querySelectorAll(".img-cuby");
gsap.set(targets, { xPercent: -100 });
gsap.set(targets[0], { xPercent: 0 });

function slideIt() {
    gsap.to(targets[countCuby], { xPercent: 100 });
    countCuby = countCuby < targets.length - 1 ? ++countCuby : 0;
    gsap.fromTo(targets[countCuby], { xPercent: -100 }, { xPercent: 0 });
    gsap.to({}, { duration: 2.5, onComplete: slideIt });
}

gsap.delayedCall(4, () => slideIt());