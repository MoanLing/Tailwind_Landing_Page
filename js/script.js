const bodyScroll = document.getElementById('body');

let scrollimer;

window.addEventListener('scroll', function(){
    clearTimeout(scrollimer);
    hideScroll();
    bodyScroll.classList.add("show-scroll");
});

function hideScroll() {
    scrollimer = setTimeout(() => {
        bodyScroll.classList.remove("show-scroll");
    }, 2000);
}