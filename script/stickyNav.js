window.onscroll = function() {stickyNavFunction()};

var navbar = document.getElementById("head-navbar");
var sticky = navbar.offsetTop;

function stickyNavFunction() {
    if(window.scrollY >= sticky){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
}