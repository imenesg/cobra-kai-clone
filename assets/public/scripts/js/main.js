// Cobra Kai.js
var bleep = new Audio();
bleep.src = "/assets/public/sound/cobra-sound.mp3";

function cobraRedirect(){
    document.cobra.src='/assets/public/img/img.svg';
    bleep.play();
    // window.location.href="#sign-in";
    // window.scrollTo(4687, 4687)
}