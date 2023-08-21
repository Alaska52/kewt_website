const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const imgEl = document.querySelector('img');
const headerText = document.querySelector('h1');


const noOptions = [
    'NO',
    'STOP LYING',
    'TRY AGAIN',
    'ARE YOU SURE',
    'STOP CHASING ME',
    'JUST SAY YES'
];

const yesOptions = [
    'YES',
    "THAT'S RIGHT",
    'SPEAK THE TRUTH',
    'BE TRUTHFUL',
    'NO JUDGEMENT HERE',
    "YOU'RE DOING GREAT",
    'CMON IM RIGHT HERE'
];

const onYesClicked = () => {
    headerText.innerText = 'Congrats on coming out of the closet <3';
    showHappyGif();
    yesBtn.remove();
    noBtn.remove();
}

const onNoClicked = () => {
    imgEl.src = 'assets/crying.gif';
    headerText.innerText = 'Look at how disappointed spongebob is in you for lying >;[';
    yesBtn.remove();
    noBtn.remove();
}

const resetGif = () => {
    imgEl.src = 'assets/patricksponge.gif';
}

const showBeggingGif = () => {
    imgEl.src = 'assets/begging.gif';
}
const showHappyGif = () => {
    imgEl.src = 'assets/happy.gif';
}

/* no button running away logic */
const runAway = () => {
    const randXPos = Math.random() * (window.innerWidth - 100);
    const randYPos = Math.random() * (window.innerHeight - 60);

    noBtn.style.position = 'absolute';
    noBtn.style.left = randXPos + 'px';
    noBtn.style.top = randYPos + 'px';

    const noOptionIndex = Math.round(Math.random() * (noOptions.length-1));
    noBtn.innerText = noOptions[noOptionIndex];    

    const yesOptionIndex = Math.round(Math.random() * (yesOptions.length-1));
    yesBtn.innerText = yesOptions[yesOptionIndex];    

}
