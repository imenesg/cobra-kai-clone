function cobraRedirect(){
    const bleep = new Audio();
    bleep.src = "../sounds/cobra-sound.mp3";
    document.cobra.src='../assets/img/img2.svg';
    bleep.play();

    setTimeout(
        function() {
           window.location.href="#sign-in";
        }.bind(this),
        577
    );
}

function cobraStop(){
    cobra.src='../assets/img/img.svg';
}

function modalPopUp(){
}

function modalVideoPopUp(){
}

function punch(){
    const punchSound = new Audio();
    punchSound.src = "../sounds/punch-sound.mp3";
    punchSound.play();
}