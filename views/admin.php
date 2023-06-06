<?php
// require './src/subscription.php';
$subscriptions = allSubscriptions();

// Debug subscriptions array
//print_r($subscriptions);
?>
<link rel="stylesheet" href="./assets/css/style_admin.css">
<link rel="icon" type="image/x-icon" href="./assets/img/icons8-кондитерские-изделия-50.png">
<nav class="navbar navbar-expand-md navbar-dark bg-warning text-dark">
    <span class="navbar-brand text-dark">Адміністрування</span>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav px-3 ml-auto">
            <li class="nav-item text-nowrap">
                <a class="nav-link text-dark" href="logout.php">Вийти</a>
            </li>
        </ul>
    </div>
</nav>
<main role="main" class="container pt-3">
    <h1>Список замовлень</h1>
    <table class="table table-striped table-sm ">
        <thead>
            <tr>
                <th>#</th>
                <th>Телефон</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($subscriptions as $index => $subscription) : ?>
                <tr>
                    <td><?= $index + 1 ?></td>
                    <td><?= $subscription['phone'] ?></td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>

    <h1>Список замовлень за фотографією</h1>
    <table class="table table-striped table-sm">
        <thead>
            <tr>
                <th>#</th>
                <th>Телефон</th>
                <th>Фотографія</th>
            </tr>
        </thead>
        <tbody>
            <?php $dir = 'uploads';
            $images = array_diff(scandir($dir), array('.', '..'));
            foreach ($subscriptions as $key => $order) {
                echo '
            <tr class="table-success">
                <th>'. $key + 1 . '</th>
                <th>' . $order['phone'] .'</th>
                <th class="fit"><img class="huy" src="uploads/' . $images[$key+2] . '"></img></th>
            </tr>
            ';
            // print_r($images);
            // echo $images;
            } ?>
        </tbody>
    </table>
</main>