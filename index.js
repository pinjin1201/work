// mobile-menu
function openMobileMenu(){
    let mobileMenu=document.querySelector("#mobile-menu");
    mobileMenu.style.display="block";
}
function closeMobileMenu(){
    let mobileMenu=document.querySelector("#mobile-menu");
    mobileMenu.style.display="none";
}
// article picture opacity
function picOneOver(){
    let picOneOver=document.querySelector("#pic-1");
    picOneOver.style.opacity="1";
    picOneOver.style.transition="0.4s";
}
function picTwoOver(){
    let picTwoOver=document.querySelector("#pic-2");
    picTwoOver.style.opacity="1";
    picTwoOver.style.transition="0.4s";
}
function picOneOut(){
    let picOneOut=document.querySelector("#pic-1");
    picOneOut.style.opacity="0.75";
}
function picTwoOut(){
    let picTwoOut=document.querySelector("#pic-2");
    picTwoOut.style.opacity="0.75";
}