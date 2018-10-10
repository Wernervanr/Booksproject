<?php

namespace App\Controllers\Api;

use App\Controllers\BaseController;
use App\Models\Book;
use Exception;

class BookController extends BaseController
{
    public function getBooks() {

        $bookModel = new Book();

        $books = $bookModel->all();

        $this->renderJson(200, $books);
    }

    public function getOneBook() {

        $id = $_GET['id'] ?? null;

        $bookModel = new Book();

        $book = $bookModel->one($id);

        $this->renderJson(200, $book);
    }

    public function getLastBook() {
        $bookModel = new Book();

        $book = $bookModel->last();

        $this->renderJson(200, $book);
    }

    public function getMostPopulairBook() {
        $bookModel = new Book();

        $book = $bookModel->MostPopulair();

        $this->renderJson(200, $book);
    }

    public function getRecommendedBooks() {
        $bookModel = new Book();

        $book = $bookModel->recommended();

        $this->renderJson(200, $book);
    }

    public function createBook() {
        $bookModel = new Book();

        $book = json_decode(file_get_contents("php://input"));

        $fields = [
            'title' => $book->title,
            'publisher' => $book->publisher,
            'series_no' => $book->series_no,
            'description' => $book->description,
            'price' => $book->price
        ];

        $bookId = $bookModel->save($fields);

        $this->renderJson(201, $bookId);

    }

    public function updateBook() {
        $id = $_GET['id'] ?? null;

        $bookModel = new Book();

        $book = json_decode(file_get_contents("php://input"));

        $fields = [
            'title' => $book->title,
            'publisher' => $book->publisher,
            'series_no' => $book->series_no,
            'description' => $book->description,
            'price' => $book->price
        ];

        $bookId = $bookModel->save($fields, $id);

        $this->renderJson(201, $bookId);
    }

    public function deleteBook() {
        $id = $_GET['id'] ?? null;

        $bookModel = new Book();

        $bookModel->delete($id);
    }
}