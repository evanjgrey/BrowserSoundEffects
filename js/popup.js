const nonAlphabetKeys = ["Shift", "Tab", "Alt", "Space", "Backspace", "Control", "Enter"];

const grammar = ["'", "\"", "(", ")", ",", ".", "?", "!", ":", ";", "/", "\\"];

const audio = new Audio("../sounds/shinunoga.mp3");
const jayAudio = new Audio("../sounds/jay.mp3");
const tabIn = new Audio("../sounds/tabin.wav");
const tabOuts = [new Audio("../sounds/tabout1.wav"), new Audio("./sounds/tabout2.wav"), new Audio("./sounds/tabout3.wav"), new Audio("./sounds/tabout4.wav")];

var tabCount = 0;

function stopAudio() {
    audio.pause();
};

function audioPlayer() {
    audio.play();
};

document.addEventListener('keydown', (e) => {
    var keydown = new Audio("../sounds/bom.wav");
    keydown.volume = 0.5;

    if (e.key === 'Shift' || e.key === ' ' || e.key === "Tab" || e.key === "Backspace" || e.key === "Control") {
        return;
    }

    keydown.play();
});

$(window).blur(function() {
    tabIn.pause();
    tabIn.currentTime = 0;

    tabOuts[tabCount].play();
    tabCount++;

    //probably wanna add a timer at some point tbh
    if (tabCount === 4) {
        tabCount = 0;
    }

});

$(window).focus(function() {
    tabOuts[tabCount].pause();
    tabOuts[tabCount].currentTime = 0;

    tabIn.play();
});