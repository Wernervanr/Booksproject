<?php

use App\Controllers\Web\BookController;
use App\Controllers\Web\LoginController;
use App\Controllers\Web\SuggestionController;
use Dotenv\Dotenv;
use Infrastructure\LogManager;


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

} else if ($route == "edit" && $method == "GET") {
    $bookController = new BookController();
    $bookController->edit($id);

} else if ($route == "create" && $method == "GET") {
    $bookController = new BookController();
    $bookController->create();

} else if ($route == 'upload-image' && $method == 'POST') {
    $bookController = new BookController();
    $bookController->uploadImage($id);

// Login

} else if ($route == "login" && $method == 'GET') {
    $loginController = new LoginController();
    $loginController->show();

} else if ($route == "login" && $method == 'POST') {
    $loginController = new LoginController();
    $loginController->login();

}  else if ($route == 'logout') {
    $loginController = new LoginController();
    $loginController->logout();

// Suggestions

}  else if ($route == 'inbox' && $method == 'GET') {
    $suggestionController = new SuggestionController();
    $suggestionController->listing();

}  else if ($route == 'show-suggestion' && $method == 'GET') {
    $suggestionController = new SuggestionController();
    $suggestionController->show($id);
}