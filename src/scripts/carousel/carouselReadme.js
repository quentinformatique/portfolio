let countReadme = 0;
const targets = document.querySelectorAll(".img-readme");
gsap.set(targets, { xPercent: -100 });
gsap.set(targets[0], { xPercent: 0 });

function slideIt() {
    gsap.to(targets[countReadme], { xPercent: 100 });
    countReadme = countReadme < targets.length - 1 ? ++countReadme : 0;
    gsap.fromTo(targets[countReadme], { xPercent: -100 }, { xPercent: 0 });
    gsap.to({}, { duration: 2.5, onComplete: slideIt });
}

gsap.delayedCall(4, () => slideIt());