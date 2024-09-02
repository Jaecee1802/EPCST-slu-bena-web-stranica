window.onscroll = function() {stickyNavFunction()};

var epcstNav = document.getElementById('epcstNav');
var sticky = epcstNav.offsetTop;

function stickyNavFunction() {
    if(window.scrollY >= sticky){
        epcstNav.classList.add(sticky);
    }
    else{
        navbar.classList.remove(sticky)
    }
}