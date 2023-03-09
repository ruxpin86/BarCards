window.onscroll = function() {scrollFunction()};

const navBar = document.getElementsByClassName("header")

const sticky = navBar.offsetTop;

function scrollFunction() {
    if (window.pageYOffset >= sticky) {
        navBar.classList.add("sticky")
    } else {
        navBar.classList.remove("sticky");
    }
}