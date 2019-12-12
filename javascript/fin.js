function fin()
{
    console.log('ta perdu poto');
    clearInterval(timerMouvementTaupe);
    clearInterval(timer60);
    canvas.removeEventListener('click', clickTaupe, false);
    effacer();

    scoreFinal = document.getElementById('scoreFinal');
    scoreFinal.style.display = 'flex';

    canvas.style.display = 'none';

    THESCORE = document.getElementById('THESCORE');
    THESCORE.innerHTML = 'Votre score est de : ' + score;
}