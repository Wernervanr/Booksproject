<?php

use App\Controllers\Api\BookController;
use App\Controllers\Api\BookVoteController;
use App\Controllers\Api\SuggestionController;
use App\Controllers\Api\UserController;
use Dotenv\Dotenv;

require __DIR__ . '/../vendor/autoload.php';

session_start();

$dotenv = new Dotenv(__DIR__ . '/../');
$dotenv->load();

set_exception_handler('Infrastructure\ErrorHandler::handleExceptions');
set_error_handler('Infrastructure\ErrorHandler::handleErrors');

$route = $_GET['route'] ?? 'index';
$id = $_GET['id'] ?? null;
$method = $_SERVER['REQUEST_METHOD'];

if ($route === 'books' && $method === 'GET') {
    $bookController = new BookController();
    $bookController->getBooks();

} else if ($route === 'books' && $method === 'POST') {
    $bookController = new BookController();
    $bookController->createBook();

} else if ($route === 'update' && $method === 'POST') {
    $bookController = new BookController();
    $bookController->updateBook();

} else if ($route === 'delete' && $method === 'POST') {
    $bookController = new BookController();
    $bookController->deleteBook();

} else if ($route === 'book' && $method === 'GET') {
    $bookController = new BookController();
    $bookController->getOneBook();

} else if ($route === 'lastbook' && $method ==='GET') {
    $bookController = new BookController();
    $bookController->getLastBook();

} else if ($route ==='mostpopulair' && $method === 'GET') {
    $bookController = new BookController();
    $bookController->getMostPopulairBook();

} else if ($route === 'recommended' && $method === 'GET') {
    $bookController = new BookController();
    $bookController->getRecommendedBooks();


    // suggestions

} else if ($route === 'suggestions' && $method === 'GET') {
    $suggestionController = new SuggestionController();
    $suggestionController->getSuggestions();

} else if ($route === 'suggestions' && $method === 'POST') {
    $suggestionController = new SuggestionController();
    $suggestionController->createSuggestion();

} else if ($route === 'deletesuggestion' && $method === 'POST') {
    $suggestionController = new SuggestionController();
    $suggestionController->deleteSuggestion();

    // end suggestions

    // users

} else if ($route === 'allusers' && $method === 'GET') {
    $userController = new UserController();
    $userController->getAllUsers();

} else if ($route === 'registeruser' && $method === 'POST') {
    $userController = new UserController();
    $userController->createUser();

} else if ($route === 'updateuserbyadmin' && $method === 'POST') {
    $userController = new UserController();
    $userController->updateUserByAdmin();

} else if ($route === 'updateuserbyuser' && $method === 'POST') {
    $userController = new UserController();
    $userController->updateUserByUser();

} else if ($route === 'deleteuser' && $method === 'POST') {
    $userController = new UserController();
    $userController->deleteUser();

    // end users


} else if ($route === 'votes') {
    $bookVoteController = new BookVoteController();
    if ($method === 'GET') {
        $bookVoteController->show($id);
    } else if ($method === 'POST') {
        $bookVoteController->upvote($id);
    } else if ($method === 'DELETE') {
        $bookVoteController->downvote($id);
    }
}
