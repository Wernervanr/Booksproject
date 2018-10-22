<?php

namespace App\Controllers\Web;

use App\Controllers\BaseController;
use Infrastructure\Authentication;

class AdminController extends BaseController
{
    public function listing()
    {
        $viewModel = [
            'pageTitle' => "Admin",
            'errors' => $this->getErrors(),
            'messages' => $this->getMessages(),
            'profile' => Authentication::getProfile(),
            'adminProfile' => Authentication::isAdminProfile()
        ];

        $this->renderWebView('/Admin/adminpage', $viewModel);
    }
}