<?php
    require('functions.php');

    if (isset($_GET['user'])) {
        getUser($pdo);
        $user = getUser($pdo);
    }

    echo json_encode($user);
    ?>