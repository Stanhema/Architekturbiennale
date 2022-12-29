window.onresize = function(){ 
    location.reload(); 


    /*var newLetterHeight = reportLetterHeight();
    console.log("newLetterHeight: " + newLetterHeight);

    const elementos = document.querySelectorAll('.scaleDownDe');
    for (let element of elementos) {
        element.style.height =  newLetterHeight + "px";
    }*/
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

    CustomEase.create("smooth", "M0,0 C0.272,0 0.301,0.103 0.5,0.5 0.7,0.9 0.744,1 1,1 ");

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
var breakpoint = 00;

function changeCss() {
    
    if (window.pageYOffset > breakpoint) {
       
        gsap.to(".scrollHead", {top: 10, duration: 0.2, ease: "smooth"});
        const elements = document.querySelectorAll(".typeAlternates");
        
        for (const element of elements) {
            let rand1 = (generateRandom(0, 10));
            element.classList.add("ss0" + (rand1));

            let rand2 = (generateRandom(0, 30));
            element.classList.remove("ss0" + (rand2));      
        }
    }
}

//Console Log Scroll Position
window.onscroll=function(){
    console.log( 
        'top: '  + (window.pageYOffset || document.documentElement.scrollTop) + ' ' +
        'left: ' + (window.pageXOffset || document.documentElement.scrollLeft)
    );
}