posTrous = [[60, 50],
           [60, 150],
           [60, 250],
           [155, 100],
           [155, 200],
           [250, 50],
           [250, 150],
           [250, 250],
           [345, 100],
           [345, 200],
           [440, 50],
           [440, 150],
           [440, 250]];
           wTaupe = 60;
           hTaupe = 75;
           wTrou = 60;
           hTrou = 30;
           tailleMapX = 500;
           tailleMapY = 300;
           lesTrous = [];
           score = 0;
           timer = 60;
           
           imgTaupe = new Image();
           imgTaupe.src = 'image/taupe.png';
           imgTaupe.onload = function() {
               console.log('imgTaupe chargé');
   };

   imgTaupeTriste = new Image();
   imgTaupeTriste.src = 'image/taupe_triste.png';
   imgTaupeTriste.onload = function() {
       console.log('imgTaupeTriste chargé');
};

imgTaupeDescente = new Image();
imgTaupeDescente.src = 'image/taupe_descente.png';
imgTaupeDescente.onload = function() {
    console.log('imgTaupeTriste chargé');
};

function effacer()
{
    //efface
    contexte.clearRect(0, 0, tailleMapX, tailleMapY);

    //dessine les trous
    for (var i = 0; i < posTrous.length; ++i)
    {
        lesTrous[i].dessinerTrou();
    }
}

function tapeTaupe() //le jeu
{
    divScore = document.getElementById('score');
    divTimer = document.getElementById('timer');
    debut();
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }