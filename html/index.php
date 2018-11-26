<?php

use App\Controllers\Web\BookController;
use App\Controllers\Web\LoginController;
use App\Controllers\Web\UserController;
use App\Controllers\Web\AdminController;
use Dotenv\Dotenv;
use Infrastructure\LogManager;
use Repositories\UserRepository;


require __DIR__ . '/../vendor/autoload.php';

session_start();

$dotenv = new Dotenv(__DIR__ . '/../');
$dotenv->load();


function handleExceptions(Throwable $oException)
{
    LogManager::log('alert','Unhandled exception: ' . $oException->getMessage() . ' - ' . $oException->getTraceAsString());
}
set_exception_handler('handleExceptions');


function handleErrors($iErrorNumber, $sError, $sErrorFile, $iErrorLine)
{
    throw new ErrorException($sError, $iErrorNumber, 0, $sErrorFile, $iErrorLine);
}
set_error_handler('handleErrors');

$route = $_GET['route']??"index";
$id = $_GET['id']??null;
$method = $_SERVER['REQUEST_METHOD'];

$adminProfile = false;
if (isset($_SESSION['profile'])) {
    if ($_SESSION['profile']['role'] === 'admin') {
        $adminProfile = true;
    }
}

// Books

if ($route == "index") {
    $bookController = new BookController();
    $bookController->index();

} else if ($route == "listing" && $method == "GET") {
    $bookController = new BookController();
    $bookController->listing();

} else if ($route == "show" && $method == "GET") {
    $bookController = new BookController();
    $bookController->show($id);

} else if ($adminProfile && $route == "edit" && $method == "GET") {
    $bookController = new BookController();
    $bookController->edit($id);

} else if ($adminProfile && $route == "create" && $method == "GET") {
    $bookController = new BookController();
    $bookController->create();

} else if ($route == 'upload-image' && $method == 'POST') {
    $bookController = new BookController();
    $bookController->uploadImage($id);

// Login

} else if ($route == "login" && $method == 'GET') {
    $userRepository = new UserRepository();
    $loginController = new LoginController($userRepository);
    $loginController->show();

} else if ($route == "login" && $method == 'POST') {
    $userRepository = new UserRepository();
    $loginController = new LoginController($userRepository);
    $loginController->login();

}  else if ($route == 'logout') {
    $userRepository = new UserRepository();
    $loginController = new LoginController($userRepository);
    $loginController->logout();

} else if ($route == "register" && $method == 'GET') {
    $userController = new UserController();
    $userController->register();

} else if ($route == "userprofile" && $method == 'GET') {
    $userController = new UserController();
    $userController->userProfile();

// Adminpage

} else if ($adminProfile && $route == "admin" && $method == "GET") {
    $adminController = new AdminController();
    $adminController->listing();
}