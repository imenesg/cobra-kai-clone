function cobraRedirect(){
    const bleep = new Audio();
    bleep.src = "/assets/public/sound/cobra-sound.mp3";
    document.cobra.src='/assets/public/img/img.svg';
    bleep.play();

    setTimeout(
        function() {
           window.location.href="#sign-in"; //window.scrollTo(4297, 4297)
        }.bind(this),
        577
    );
}

function menuHamburger(){

}

function modalPopUp(){
}

function modalVideoPopUp(){
}

function punch(){
    const punchSound = new Audio();
    punchSound.src = "/assets/public/sound/punch-sound.mp3";
    punchSound.play();
}