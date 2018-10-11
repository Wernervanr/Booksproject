<?php

namespace App\Controllers\Web;

use App\Controllers\BaseController;
use Infrastructure\Authentication;

class SuggestionController extends BaseController
{
    public function listing()
    {
        $viewModel = [
            'pageTitle' => "Inbox",
            'errors' => $this->getErrors(),
            'messages' => $this->getMessages(),
            'profile' => Authentication::getProfile()
        ];

        $this->renderWebView('/Suggestions/inbox', $viewModel);
    }
}