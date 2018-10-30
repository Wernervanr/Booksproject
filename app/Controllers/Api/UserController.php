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

    public function deleteUser() {
        $id = $_GET['id'] ?? null;

        $userModel = new User();

        $userModel->delete($id);
    }

    public function updateUserByUser() {
        $userModel = new User();

        $user = json_decode(file_get_contents("php://input"));

        $fields = [
            'derp' => $user[0]
        ];

        $id = $_GET['id'] ?? null;

        $userModel->updateByUser($fields, $id);
    }

    // Admin functions

    public function getAllUsers() {
        $userModel = new User();

        $users = $userModel->getAllUsers();

        $this->renderJson(200, $users);
    }

    public function updateUserByAdmin() {
        $userModel = new User();

        $user = json_decode(file_get_contents("php://input"));
        $password = $user->password;
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        if ($password != null) {
            $fields = [
                'username' => $user->username,
                'password' => $hashedPassword,
                'role' => $user->role,
                'email' => $user->email
            ];
        } else {
            $fields = [
                'username' => $user->username,
                'role' => $user->role,
                'email' => $user->email
            ];
        }

        $id = $_GET['id'] ?? null;

        $userModel->update($fields, $id);
    }
}