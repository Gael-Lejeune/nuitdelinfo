<?php
if ($_POST['answer'] == 'précarité') {
        header('Location: Fin.html');
        exit();
    }
else {
    header('Location: gameOver.php');
    exit();

}
?>
