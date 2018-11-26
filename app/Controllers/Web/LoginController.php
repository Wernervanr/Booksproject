<?php

namespace App\Controllers\Web;

use App\Controllers\BaseController;
use App\Models\Entities\User;
use App\Models\Interfaces\UserRepositoryInterface;
use Infrastructure\Authentication;

class LoginController extends BaseController
{

    private $userRepository;

    public function __construct(UserRepositoryInterface $userRepository)
    {
        parent::__construct();

        $this->userRepository = $userRepository;
    }


    public function show() : void
    {
        $viewModel = [
            'pageTitle' => 'Login',
            'errors' => $this->getErrors(),
            'messages' => $this->getMessages(),
            'profile' => Authentication::getProfile()
        ];

        $this->renderWebView('/Login/login', $viewModel);
    }

    public function login() : void
    {
        $username = $_POST['username'] ?? '';
        $password = $_POST['password'] ?? '';

        /** @var User $user */
        $user = $this->userRepository->login($username, $password);

        if ($user) {
            $_SESSION['profile'] = array
            (
                'userId' => $user->getId(),
                'userName' => $user->getEmail(),
                'userFirstName' => $user->getFirstName(),
                'userLastName' => $user->getLastName(),
                'userFullName' => $user->getFullName()
            );

            header('Location: ?route=index');
        }
        else {
            $this->addError('Combination of user and password is not correct');
            header('Location: ?route=login');
        }
    }

    public function logout() : void
    {
        Authentication::logout();
        header('Location: ?route=index');
    }
}