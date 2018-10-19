<?php

namespace Infrastructure;

use App\Models\User;

class Authentication
{
    public static function login(string $username, string $password) : bool
    {
        $userModel = new User();
        $user = $userModel->getUser($username);

        if ($user != false) {
            $hashedPassword = $user['password'];
            if (password_verify($password, $hashedPassword))
            {
                $_SESSION['profile'] = array
                (
                    'userId' => $user['id'],
                    'userName' => $user['username'],
                    'userFirstName' => $user['first_name'],
                    'userLastName' => $user['last_name'],
                    'userEmail' => $user['email'],
                    'role' => $user['role']
                );
                return true;
            } else {
                return false;
            }
        }
        return false;
    }

    public static function logout() {
        session_destroy();
    }

    public static function isLoggedIn() {
        return isset($_SESSION['profile']);
    }

    public static function getProfile() {
        return $_SESSION['profile'] ?? null;
    }

    public static function getAdminProfile() {
        if (isset($_SESSION['profile'])) {
            if ($_SESSION['profile']['role'] === 'admin') {
                return true;
            }
        }
    }
}