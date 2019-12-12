function clickTaupeDepart()
{
    sourisX = event.clientX - canvas.offsetLeft;
    sourisY = event.clientY - canvas.offsetTop;
    if(taupeDepart.toucheTaupe())
    {
        jeu();
    }
}

function debut()
{
    canvas = document.getElementById('tapetaupe');
    canvas.style.display = 'flex';
    document.getElementById('scoreFinal').style.display = 'none';
    score = 0;
    timer = 60;
    contexte = canvas.getContext('2d');

    //dessine les trous
    for (var i = 0; i < posTrous.length; ++i)
    {
        lesTrous.push(new Trou(i));
    }
    
    //dessine la taupe de départ
    taupeDepart = new Taupe(6, false);

    canvas.addEventListener('click', clickTaupeDepart, false);
}