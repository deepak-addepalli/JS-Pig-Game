var scores, currentScore, activePlayer, stillPlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function () {
    if(stillPlaying){
        var dice = Math.floor(Math.random() * 6) + 1;
        var diceImage = document.querySelector('.dice');
        diceImage.style.display = 'block';
        diceImage.src = 'dice-'+dice+'.png';

        if(dice !== 1){
            currentScore += dice;
            document.querySelector('#current-'+ activePlayer).textContent = currentScore;
        }
        else{
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click',function () {
    if(stillPlaying){
        scores[activePlayer] += currentScore;
        document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
        if(scores[activePlayer] >= 50){
            document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
            document.querySelector('.player-'+activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer + '-panel').classList.remove('active');
            document.querySelector('.dice').style.display = 'none';
            stillPlaying = false;
        }
        else{
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    activePlayer = 0;
    currentScore = 0;
    stillPlaying = true;
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-'+activePlayer + '-panel').classList.remove('winner');
    document.querySelector('.player-'+activePlayer + '-panel').classList.add('active')
}

function nextPlayer() {
    currentScore = 0;
    document.querySelector('#current-'+ activePlayer).textContent = '0';
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}
