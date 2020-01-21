<?php
    require('functions');

    if (issset($_GET['user'])) {
        getUser($pdo);
    }

    ?>