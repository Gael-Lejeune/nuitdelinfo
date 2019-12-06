function jeu()
{
    console.log('je joue');
    canvas.removeEventListener('click', clickTaupeDepart, false);
    effacer();

    //mouvement de taupe
    mouvementTaupe();
    timerMouvementTaupe = setInterval(mouvementTaupe, 1000);
    timer60 = setInterval(uneSecondeEnMoins, 1000);

    canvas.addEventListener('click', clickTaupe, false);
}

function mouvementTaupe()
{
    effacer();
    console.log('La taupe bouge');
    unTrouAlea = getRandomInt(0,13);
    uneTaupe = new Taupe(unTrouAlea, false);
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}

function afficheTaupeTriste()
{
    effacer();
    console.log('La taupe Triste');
    canvas.removeEventListener('click', clickTaupe, false);
    new Taupe(unTrouAlea, true);
    // sleep(1000);
    // mouvementTaupe();
}

function clickTaupe()
{
    sourisX = event.clientX - canvas.offsetLeft;
    sourisY = event.clientY - canvas.offsetTop;
    if(uneTaupe.toucheTaupe())
    {
        addScore();
        afficheTaupeTriste();
        window.clearInterval(timerMouvementTaupe);
        timerMouvementTaupe = setInterval(mouvementTaupe, 1000-(score*25));
    }
}

function addScore()
{
    score++;

    //afficher le score
    divScore.innerHTML = "SCORE : " + score;
}

function uneSecondeEnMoins()
{
    timer--;

    //afficher le timer
    divTimer.innerHTML = timer;

    //fin jeu
    if(timer <= 0)
    {
        fin();
    }
}