<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title><?php echo $viewModel['pageTitle'] ?></title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script src="js/environment-settings.js"></script>
    <script src="js/init.js"></script>
    <link rel="stylesheet" href="js/slick/slick.css">
    <link rel="stylesheet" href="js/slick/slick-theme.css">
    <link href="css/main.css" rel="stylesheet" />
</head>

<body class="bg-comic">
    <nav class="navbar navbar-expand-sm navbar-dark bg-yellow">
        <a class="navbar-brand" href="?route=index">Book catalog</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="?route=index">Home <span class="sr-only">(current)</span></a>
                </li>
            </ul>
            <ul class="navbar-nav">
                <?php if ($viewModel['profile']) { ?>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <?php echo $viewModel['profile']['userFullName']; ?>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="?route=logout">Logout</a>
                        </div>
                    </li>

                <?php } else { ?>

                    <li class="nav-item active">
                        <a class="nav-link" href="?route=login">Login <span class="sr-only">(current)</span></a>
                    </li>

                <?php }?>
            </ul>
        </div>
    </nav>

    <div class="slides">
        <div class="slide blue">
            <div class="">
                <img src="img/18.jpg" alt="" />
            </div>
        </div><!--/Slide 1-->

        <div class="slide orange">
            <div class="">
                <img src="" alt="" />
            </div>
        </div><!--/Slide 2-->

        <div class="slide green">
            <div class="">
                <img src="" alt="" />
            </div>
        </div><!--/Slide 3-->

        <div class="slide yellow">
            <div class="">
                <img src="" alt="" />
            </div>
        </div><!--/Slide 4-->
    </div>

<div class="container bg-white">
    <div class="row">
        <div class="col">

            <?php
            if ($viewModel['errors']) {
                $errorMessage = implode('<br />',$viewModel['errors']);
                ?>

                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <p><strong>Oh no, something went wrong!</strong></p>
                    <?php echo $errorMessage; ?>
                </div>

            <?php } ?>


            <?php
            if ($viewModel['messages']) {
            $message = implode('<br />',$viewModel['messages']);
            ?>

            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <?php echo $message; ?>
            </div>

            <?php } ?>