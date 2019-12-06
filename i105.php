<?php
?>

<!doctype html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title> Index </title>

    <link rel="stylesheet" href="css/i105.css">

    <script src="javascript/postit.js"></script>

</head>
<body>

<a class="map" href="map.php"> Cliquer ici pour voir la map </a>

<a class="map1" onclick="afficherFenetre('ecran')"> <video class="rickrick" controls autoplay loop src="image/Rick-1.webm"></video> </a>

    <div class="fenetre_alert" id="ecran">
        <p> Entrez le code : </p>
    <input oninput="checkCode();" type="number" name="ordi" id="codelife">
    <div class="fenetre_alert2" id="code">
    <p>nouveau code = 1</p>
    </div>
    </div>

<a class="exit" href="i117.php"></a>
</body>
</html>