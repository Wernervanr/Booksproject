<?php

namespace App\Controllers\Web;

use App\Controllers\BaseController;
use App\Models\Suggestion;
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

    public function show($id = 0)
    {
        $suggestion = new Suggestion();

        $viewModel = [
            'pageTitle' => "Inbox",
            'errors' => $this->getErrors(),
            'messages' => $this->getMessages(),
            'suggestion' => $suggestion->one($id),
            'profile' => Authentication::getProfile(),
        ];

        $this->renderWebView('/Suggestions/detail', $viewModel);
    }
}