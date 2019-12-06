<?php
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Erreur 404</title>
        <link href="https://fonts.googleapis.com/css?family=Tomorrow&display=swap" rel="stylesheet">
        <!-- CSS -->
        <link rel="stylesheet" href="css/404.css">

        <!-- JS -->
        <script src="javascript/tapeTaupe.js" ></script>
        <script src="javascript/debut.js" ></script>
        <script src="javascript/jeu.js" ></script>
        <script src="javascript/fin.js" ></script>
        <script src="javascript/trou.js" ></script>
        <script src="javascript/taupe.js" ></script>
    </head>
    <body onload="tapeTaupe()">
    <a class="map" href="map.php"> Cliquer ici pour voir la map </a>
        <div class="div1">
            <h1>Erreur 404</h1>
        </div>
        <div>
            <h2>TAPE TAUPE</h2>
            <canvas id="tapetaupe" width="500" height="300">
                <p>Canvas non géré, changer de navigateur.</p>
            </canvas>
            <div id="scoreFinal">
                <p id="THESCORE">Votre score est de : ???</p>
                <button onclick="debut()">Réessayer</button>
            </div>
            <div id="score_board">
                <p id="score">SCORE : 0</p>
                <p id="timer">60</p>
            </div>
        </div>
        </body>
</html>