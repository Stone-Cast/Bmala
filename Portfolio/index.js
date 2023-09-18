function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return Math.trunc((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100);
}
function changeColor(){
    var scrollLevel = getScrollPercent();
    console.log(scrollLevel);
    var homeLink = document.getElementById('home-link');
    var aboutLink = document.getElementById('about-link');
    var serviceLink = document.getElementById('service-link');
    var contactLink = document.getElementById('contact-link');
    if(scrollLevel > 20){
        document.getElementById("header").style.top = "-2px";
    }else{
        document.getElementById("header").style.top = "-65px";
    }
    if(scrollLevel < 48){
        homeLink.style.color="rgba(255, 255, 255, 0.8)";
        aboutLink.style.color="rgba(255, 255, 255, 0.8)";
        serviceLink.style.color="rgba(255, 255, 255, 0.8)";
        contactLink.style.color="rgba(255, 255, 255, 0.8)";
        }else{
            homeLink.style.color="black";
            aboutLink.style.color="black";
            serviceLink.style.color="black";
            contactLink.style.color="black";
        }
    if (scrollLevel > 16){
        document.getElementById("heading1").style.top = "35vh";
        document.getElementById("heading1").style.filter = "blur(0px)";
        document.getElementById("heading2").style.top = "45vh";
    }

}

window.addEventListener('scroll', changeColor);

