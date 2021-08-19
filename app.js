const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const navlist = document.querySelector('.navlist');
const headline = document.querySelector('.headline');
const shape = document.querySelector('.shape');


const tl = new TimelineMax();
const width = window.innerWidth;
const height = window.innerHeight;
let heightCalc;
if (width < 1000){
    heightCalc = "70%";
} else {
    heightCalc = "90%";
}
console.log(heightCalc)
console.log('width: '+ width + '  height: ' + height)

tl
    .fromTo(hero, 1, {height: "0%"}, {height:`${heightCalc}`, ease: Power2.easeInOut})
    .fromTo(hero, 1.1, {width: "100%"}, {width: "80%", ease: Power2.easeInOut})
    .fromTo(slider, 1.1, {x: "-100%"},{x: "0%", ease: Power2.easeInOut}, "-=1")
    .fromTo(shape, 1.1, {x: "-100%"},{x: "0%", ease: Power2.easeInOut},"-=1.1")
    .fromTo(navlist, 0.5, {opacity:"0", x:"-30"},{ opacity: "1", x:"0"},"-=0.5")
    .fromTo(headline, 0.5,{opacity: "0", x:"-100"},{ opacity: "1"},"-=1");
    
