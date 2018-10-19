<?php

namespace App\Controllers\Api;

use App\Controllers\BaseController;
use App\Models\User;
use Exception;

class UserController extends BaseController
{
    public function createUser() {
        $userModel = new User();

        $user = json_decode(file_get_contents("php://input"));
        $password = $user->password;
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $fields = [
            'username' => $user->username,
            'password' => $hashedPassword,
            'first_name' => $user->first_name,
            'last_name' => $user->last_name,
            'email' => $user->email
        ];

        $userModel->save($fields);
    }
}