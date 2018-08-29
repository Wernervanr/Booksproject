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



    //29 augustus

    public function getOneBook() {
        $bookModel = new Book();

        $book = $bookModel->one($id);

        $this->renderJson(200, $book);
    }

    // end 29 augustus




    public function createBook() {
        $bookModel = new Book();

        $book = json_decode(file_get_contents("php://input"));

        $fields = [
            'title' => $book->title,
            'author_id' => $book->author_id,
            'category_id' => $book->category_id,
            'isbn' => $book->isbn,
            'description' => $book->description,
            'price' => $book->price
        ];

        $bookId = $bookModel->save($fields);

        $this->renderJson(201, $bookId);

    }

// 28 augustus

    public function updateBook() {
        $bookModel = new Book();

        $book = json_decode(file_get_contents("php://input"));

        $fields = [
            'title' => $book->title,
            'author_id' => $book->author_id,
            'category_id' => $book->category_id,
            'isbn' => $book->isbn,
            'description' => $book->description,
            'price' => $book->price,
        ];

        $id = $book->id;

        $bookId = $bookModel->save($fields, $id);

        $this->renderJson(201, $bookId);
    }

    public function deleteBook() {
        $bookModel = new Book();
        $book = json_decode(file_get_contents("php://input"));
        $id = $book->id;

        $bookModel->delete($id);
    }

// end 28 augustus

}