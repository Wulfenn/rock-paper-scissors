// Computer Selection

function computerPlay() {
    if (!askReset()) {
        const aiBubble = document.querySelector('.rps-ai-selection');
        let num = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

        switch (num) {
            case 1:

                aiBubble.setAttribute('src', 'assets/rock.png');
                return 'rock';
                break;
            case 2:
                aiBubble.setAttribute('src', 'assets/paper.png');
                return 'paper';
                break;
            case 3:
                aiBubble.setAttribute('src', 'assets/scissors.png');
                return 'scissors';
                break;
        }
    }
}


// Player Selection

const btnRock = document.querySelector('#select-rock');

btnRock.onclick = function () {
    if (!askReset()) {
        const plyrBubble = document.querySelector('.rps-player-selection');
        plyrBubble.setAttribute('src', 'assets/rock.png')
        playRound('rock', computerPlay());
    }
}

const btnPaper = document.querySelector('#select-paper');

btnPaper.onclick = function () {
    if (!askReset()) {
        const plyrBubble = document.querySelector('.rps-player-selection');
        plyrBubble.setAttribute('src', 'assets/paper.png')
        playRound('paper', computerPlay());
    }
}

const btnScissors = document.querySelector('#select-scissors');

btnScissors.onclick = function () {
    if (!askReset()) {
        const plyrBubble = document.querySelector('.rps-player-selection');
        plyrBubble.setAttribute('src', 'assets/scissors.png')
        playRound('scissors', computerPlay());
    }
}



// Play Round Function

function playRound(playerSelection, computerSelection) {

    if (!askReset()) {

        if (playerSelection == 'rock' && computerSelection == 'paper' ||
            playerSelection == 'paper' && computerSelection == 'scissors' ||
            playerSelection == 'scissors' && computerSelection == 'rock') {

            // Lose Condition
            colorBubble('plyr');
            removeHeart('plyr');
            lookForWinner();


        } else if (playerSelection == computerSelection) {  // Tie Condition

            colorBubble('tie');

        } else { // Win Condition

            colorBubble('ai');
            removeHeart('ai');
            lookForWinner();

        }
    }
}

// Visual changes on outcome

function colorBubble(outcome) { // Styles the Speech bubble
    const plyrBg = document.querySelector('.player-bubble');
    const plyrPt = document.querySelector('.player-pointer');
    const aiBg = document.querySelector('.ai-bubble');
    const aiPt = document.querySelector('.ai-pointer');

    if (outcome == 'plyr') {
        plyrBg.style.backgroundColor = '#78342b';
        plyrPt.style.backgroundColor = '#78342b';
        aiBg.style.backgroundColor = '#81be0a';
        aiPt.style.backgroundColor = '#81be0a';
    } else if (outcome == 'tie') {
        plyrBg.style.backgroundColor = '#fdcd01';
        plyrPt.style.backgroundColor = '#fdcd01';
        aiBg.style.backgroundColor = '#fdcd01';
        aiPt.style.backgroundColor = '#fdcd01';
    } else {
        plyrBg.style.backgroundColor = '#81be0a';
        plyrPt.style.backgroundColor = '#81be0a';
        aiBg.style.backgroundColor = '#78342b';
        aiPt.style.backgroundColor = '#78342b';
    }
}

function removeHeart(who) {  // Heart system
    if (who == 'plyr') {
        for (let i = 5; i > 0; i--) {
            const plyrHeart = document.querySelector(`#plyr-hrt${i}`);
            if (plyrHeart.classList.contains('full-heart')) {
                plyrHeart.classList.remove('full-heart');
                plyrHeart.classList.add('empty-heart');
                plyrHeart.setAttribute('src', 'assets/emptyheart.png');
                break;
            }
        }
    } else if (who == 'ai') {
        for (let i = 5; i > 0; i--) {
            const aiHeart = document.querySelector(`#ai-hrt${i}`);
            if (aiHeart.classList.contains('full-heart')) {
                aiHeart.classList.remove('full-heart');
                aiHeart.classList.add('empty-heart');
                aiHeart.setAttribute('src', 'assets/emptyheart.png');
                break;
            }
        }
    }
}

// Reset Game

const showResults = document.querySelector('#show-results');
const btnReset = document.querySelector('#reset');
const h4Text = document.querySelector('#h4-text')

btnReset.onclick = function () {
    resetGame();
}

function resetGame() {
    showResults.classList.remove('results-lose');
    showResults.classList.remove('results-win');
    h4Text.textContent = '';

    for (let i = 5; i > 0; i--) {
        const refillPlyrHeart = document.querySelector(`#plyr-hrt${i}`);
        if (refillPlyrHeart.classList.contains('empty-heart')) {
            refillPlyrHeart.classList.remove('empty-heart');
            refillPlyrHeart.classList.add('full-heart');
            refillPlyrHeart.setAttribute('src', 'assets/fullheart.png');
        }
    }
    for (let i = 5; i > 0; i--) {
        const refillAIHeart = document.querySelector(`#ai-hrt${i}`);
        if (refillAIHeart.classList.contains('empty-heart')) {
            refillAIHeart.classList.remove('empty-heart');
            refillAIHeart.classList.add('full-heart');
            refillAIHeart.setAttribute('src', 'assets/fullheart.png');
        }
    }
}

function askReset() {

    const lastPlayerHeart = document.querySelector('#plyr-hrt1');
    const lastAIHeart = document.querySelector('#ai-hrt1');

    if (lastPlayerHeart.classList.contains('empty-heart')) {
        console.log('Please reset the game!');
        return true;
    } else if (lastAIHeart.classList.contains('empty-heart')) {
        console.log('Please reset the game!');
        return true;
    }
}

// Overall outcome results

function lookForWinner() {

    const lastPlayerHeart = document.querySelector('#plyr-hrt1');
    const lastAIHeart = document.querySelector('#ai-hrt1');

    if (lastPlayerHeart.classList.contains('empty-heart')) {
        showResults.classList.add('results-lose');
        h4Text.textContent = "You lose...";
    } else if (lastAIHeart.classList.contains('empty-heart')) {
        showResults.classList.add('results-win');
        h4Text.textContent = "You win!"
    }
}

// Change Avatars

let avatarNumber = 1;

const btnChangePlayerAvatar = document.querySelector('#change-avatar');
btnChangePlayerAvatar.onclick = function () {
    const playerAvatar = document.querySelector('#player-avatar');
    if (avatarNumber <= 5) {
        playerAvatar.setAttribute(`src`, `assets/avatar${avatarNumber++}.png`);
    } else {
        avatarNumber = 1;
    }

}

let bossNumber = 1;

const btnChangeAIAvatar = document.querySelector('#change-boss');
btnChangeAIAvatar.onclick = function () {
    const aiAvatar = document.querySelector('#ai-avatar');
    if (bossNumber <= 5) {
        aiAvatar.setAttribute(`src`, `assets/boss${bossNumber++}.png`);
    } else {
        bossNumber = 1;
    }

}