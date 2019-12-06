<?php
?>

<!doctype html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title> Index </title>

    <link rel="stylesheet" href="css/i109.css">
    <link rel="stylesheet" href="css/reset.css">

    <script src="javascript/postit.js"></script>

</head>
<body>

<div class="fenetre_alert1" id="postit1">
    <p> R </p>
</div>

<div class="fenetre_alert2" id="postit2">
    <p> L </p>
</div>

<div class="fenetre_alert3" id="postit3">
    <p> U </p>
</div>

<div class="fenetre_alert4" id="postit4">
    <form action="i120.php?CODE_FINAL=0" method="post">
        Entrez le code de validation :

        <input type="text" name="code_validation" pattern="URL">
    </form>
</div>

<a class="map" href="map.php"> Cliquer ici pour voir la map </a>

<a onclick="afficherFenetre('postit1')"> <img id="postit1" class="postit" src="image/postit.png"> </a>
<a onclick="afficherFenetre('postit2')"> <img id="postit2" class="postit" src="image/postit.png"> </a>
<a onclick="afficherFenetre('postit3')"> <img id="postit3" class="postit" src="image/postit.png"> </a>
<a onclick="afficherFenetre('postit4')"> <img id="postit4" class="postit" src="image/postit.png"> </a>

</body>
</html>
