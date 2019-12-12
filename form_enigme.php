<?php

    if ($_POST['code'] == '0512') {
        header('Status: 301 Moved Permanently', false, 301);
        header('Location: enigmefinale.php');
        exit();
    }
    else {
        header('Location: gameOver.php');
        exit();
    }
