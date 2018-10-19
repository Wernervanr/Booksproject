<?php

namespace App\Controllers\Web;

use App\Controllers\BaseController;
use App\Models\Book;
use Infrastructure\Authentication;

class BookController extends BaseController
{

    public function validate($fields = [])
    {

    }

    public function index()
    {
        $viewModel = [
            'pageTitle' => "Comic Books",
            'errors' => $this->getErrors(),
            'messages' => $this->getMessages(),
            'profile' => Authentication::getProfile(),
            'adminProfile' => Authentication::getAdminProfile()
        ];

        // HOMEPAGE MOET listing ZIJN, ALLEEN TER TEST NU HOMEPAGE

        $this->renderWebView('/Books/homepage', $viewModel);
    }

    public function listing()
    {
        $viewModel = [
            'pageTitle' => "Comic Books",
            'errors' => $this->getErrors(),
            'messages' => $this->getMessages(),
            'profile' => Authentication::getProfile(),
            'adminProfile' => Authentication::getAdminProfile()
        ];

        $this->renderWebView('/Books/listing', $viewModel);
    }

    public function show($id = 0)
    {
        $book = new Book();

        $imagePath = '';
        if (file_exists(__DIR__ . '/../../../html/img/' . $id . '.jpg')) {
            $imagePath = 'img/' . $id . '.jpg';
        }

        $viewModel = [
            'pageTitle' => "Comic Book",
            'book' => $book->one($id),
            'errors' => $this->getErrors(),
            'messages' => $this->getMessages(),
            'profile' => Authentication::getProfile(),
            'adminProfile' => Authentication::getAdminProfile(),
            'imagePath' => $imagePath
        ];

        $this->renderWebView('/Books/detail', $viewModel);
    }

    public function edit($id = 0)
    {
        $book = new Book();

        $viewModel = [
            'pageTitle' => "Comic Book",
            'book' => $book->one($id),
            'errors' => $this->getErrors(),
            'messages' => $this->getMessages(),
            'profile' => Authentication::getProfile(),
            'adminProfile' => Authentication::getAdminProfile()
        ];

        $this->renderWebView('/Books/update-book', $viewModel);
    }

    public function create()
    {
        $viewModel = [
            'pageTitle' => "Add a comic book",
            'errors' => $this->getErrors(),
            'messages' => $this->getMessages(),
            'profile' => Authentication::getProfile(),
            'adminProfile' => Authentication::getAdminProfile()
        ];

        $this->renderWebView('/Books/new-book', $viewModel);
    }

    public function uploadImage($id) : void
    {
        $imageFile = $_FILES['imageFile'] ?? null;

        if (!$imageFile || $imageFile['error'] > 0) {
            $this->addError('There was an error while extracting the image');
            header('Location: ?route=show&id=' . $id);
        } else if (!in_array($imageFile['type'], array('image/png', 'image/jpeg'))) {
            $this->addError('The supplied image was not of type PNG or JPEG');
            header('Location: ?route=show&id=' . $id);
        } else {
            $targetImageFile = __DIR__ . '/../../../html/img/' . $id . '.jpg';

            rename($imageFile['tmp_name'], $targetImageFile);
            header('Location: ?route=show&id=' . $id);
        }
    }
}