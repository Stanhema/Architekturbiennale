window.onresize = function(){ 
    location.reload(); 
}

function generateRandom(min, max) {

    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + min;
    if (rand == 0) {
        return rand+1;
    } else {
        return rand;
    }
}

/*FRAGMENT ANIMATION*/

var letterHeight;

function reportLetterHeight() {
    console.log('reportLetterHeight called');
    const element = document.querySelector(':root');
    const computedStyles = window.getComputedStyle(element);
    const cssVariableValue = computedStyles.getPropertyValue('--letter-height');

    letterHeight = parseInt(cssVariableValue.replace("px", ""));
    console.log("letterHeight1: " + letterHeight);
    return letterHeight;   
};

reportLetterHeight();
console.log("letterHeight2: " + letterHeight);
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
console.log("vw: " + vw);

function randomCss() {

    CustomEase.create("smooth", "M0,0,C0.238,0,0.254,0.258,0.3,0.5,0.364,0.8,0.44,0.857,0.5,0.9,0.622,0.988,0.698,1,1,1");

    const fragmentsEn = document.querySelectorAll(".fragmentsEn");

    for (i = 0; i < fragmentsEn.length; i++) {
        fragmentsEn[i].classList.add("move0" + [i]);

        let tl = gsap.timeline({})

        tl.fromTo(".move0"+[i], {y: (generateRandom(0, 300)), x: (generateRandom(0, 300)), rotation: (generateRandom(-360, 360))}, {y: 0, x: 0, rotation: 0, duration: 5, ease: "smooth"});
        tl.to(".move0"+[i], {y: (generateRandom(900, 1000))*Math.ceil(generateRandom(-1, 1)), x: (generateRandom(900, 1000))*Math.ceil(generateRandom(-1, 1)),  rotation: (generateRandom(-360, 360)),  duration: 10, ease: "smooth", delay: 0.5});
    }

    const fragmentsDe = document.querySelectorAll(".fragmentsDe");

    for (i = 0; i < fragmentsDe.length; i++) {
        fragmentsDe[i].classList.add("moves0" + [i]);

        let tl = gsap.timeline({})

        tl.fromTo(".moves0"+[i], {y: (generateRandom(0,300)), x: (generateRandom(0, 300)), rotation: (generateRandom(-360, 360))}, {y: (generateRandom(900,  1000))*Math.ceil(generateRandom(-1, 1)), x: (generateRandom(900, 1000))*Math.ceil(generateRandom(-1, 1)), rotation: (generateRandom(-360, 360)), duration: 5, ease: "smooth"});
        tl.to(".moves0"+[i], {y: 0, x: 0, rotation: 0, duration: 5, ease: "smooth", delay: 0.5 });
    }

    let tl2 = gsap.timeline({})
    tl2.to(".scaleDownEn", { duration: 2.5, ease: "smooth", height: 0, delay: 6 });

    let tl3 = gsap.timeline({})
    tl3.from(".scaleDownDe", { duration: 2.5, ease: "smooth", height: 0, delay: 6 });
   
}

window.onload = function() {
    randomCss();
};

/*SCROLL Nav/Header ANIMATION*/

window.addEventListener("scroll", changeCss);

var styless = ["ss00", "ss01", "ss02", "ss03", "ss04", "ss05", "ss06", "ss07", "ss08", "ss09"];
var breakpoint = 800;

let prevScrollPos = window.scrollY;
let scrollCounter = 0;
let randomizerSpeed = 30;

function changeCss() {
    
    if (window.pageYOffset > breakpoint) {
        gsap.to(".scrollHead", {top: 10, duration: 0.2, ease: "smooth"});
    } else {
        gsap.to(".scrollHead", {top: -100, duration: 0.2, ease: "smooth"});
    }

    window.onscroll = function() {
        scrollCounter += Math.abs(window.pageYOffset - prevScrollPos);
        prevScrollPos = window.pageYOffset;
            if (scrollCounter >= randomizerSpeed) {
            scrollCounter = 0;
        
            const elements1 = document.querySelectorAll(".typeAlternates-0-9");
            
            for (const element of elements1) {
                let rand = (generateRandom(0, 9));
                element.classList =("typeAlternates-0-9 ss0" + (rand));
            }

            const elements2 = document.querySelectorAll(".typeAlternates-0-5");
            
            for (const element of elements2) {
                let rand = (generateRandom(0, 5));
                element.classList =("typeAlternates-0-5 ss0" + (rand));
            }

            const elements3 = document.querySelectorAll(".typeAlternates-6-12");
            
            for (const element of elements3) {
                let rand = (generateRandom(6, 12));
                element.classList =("typeAlternates-6-12 ss0" + (rand));
            }

            const elements4 = document.querySelectorAll(".typeAlternates-11-18");
            
            for (const element of elements4) {
                let rand = (generateRandom(11, 18));
                element.classList =("typeAlternates-11-18 ss0" + (rand));
            }
        }
    }
}

/* 

O 	= ss.00–ss.09   1
P 	= ss.00–ss.09	1	
E1 	= ss.00–ss.05   2	
N1	= ss.00–ss.05   2		
F	= ss.00–ss.09   1		
O	= ss.00–ss.09   1		
R	= ss.00–ss.05   2
M	=ss.00–ss.09    1		
A1	=ss.00–ss.06	2	
I.      = ss.00
N2	= ss.06–ss.12	3	
T	= ss.00–ss.06	2	
E2	= ss.06–ss.10	3
N3	= ss.13–ss.18   4
A2	= ss.07–ss.12	3	
N4	= ss.13–ss.18   4
C	= ss.00–ss.04	2	
E3	= ss.11–ss.18   4

*/