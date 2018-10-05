<?php

namespace App\Controllers\Api;

use App\Controllers\BaseController;
use App\Models\Book;

class BookVoteController extends BaseController
{

    public function show($id = 0)
    {

        $book = new Book();
        $book = $book->one($id);

        if ($book) {
            $this->renderJson(200, $book['votes']);
        } else {
            $this->renderJson(404);
        }
    }

    public function upvote($id = 0)
    {
        $book = new Book();
        $foundBook = $book->one($id);

        if ($foundBook) {
            $book->upVote($id);
            $this->renderJson(200, $foundBook['votes'] +1 );
        } else {
            $this->renderJson(404);
        }
    }

    public function downvote($id = 0)
    {
        $book = new Book();
        $foundBook = $book->one($id);

        if ($foundBook) {
            $book->downVote($id);
            $this->renderJson(200, $foundBook['votes'] -1 );

        } else {
            $this->renderJson(404);
        }
    }
}