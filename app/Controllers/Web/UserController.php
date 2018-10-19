<?php

namespace App\Controllers\Web;

use App\Controllers\BaseController;
use Infrastructure\Authentication;

class UserController extends BaseController
{
    public function register() : void
    {
        $viewModel = [
            'pageTitle' => 'Register',
            'errors' => $this->getErrors(),
            'messages' => $this->getMessages(),
            'profile' => Authentication::getProfile()
        ];

        $this->renderWebView('/Users/register', $viewModel);
    }
}