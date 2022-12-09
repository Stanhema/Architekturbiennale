window.addEventListener("scroll", changeCss);

var styless = ["ss00", "ss01", "ss02", "ss03"];

function changeCss() {
    var breakpoint = 100;

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    
    if (window.pageYOffset > breakpoint) {
        
        const elements = document.querySelectorAll(".typeAlternates");
        for (const element of elements) {
            element.classList.add("ss0" + (getRandomInt(30)/5));
            element.classList.remove("ss0" + (getRandomInt(30)/5));
        }
    }
}

//Log Scroll Position
window.onscroll=function(){
    console.log( 
        'top: '  + (window.pageYOffset || document.documentElement.scrollTop) + ' ' +
        'left: ' + (window.pageXOffset || document.documentElement.scrollLeft)
    );
}