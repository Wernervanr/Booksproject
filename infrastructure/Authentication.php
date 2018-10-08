<?php
/**
 * Created by PhpStorm.
 * User: wernervanranderaat
 * Date: 06/08/2018
 * Time: 11:16
 */

namespace Infrastructure;


use App\Controllers\BaseController;

class Authentication extends BaseController
{
    public static function login(string $username, string $password) : bool
    {
        if ($username === 'admin' && $password ==='admin') {
            $_SESSION['profile'] = array(
                'userId' => 1,
                'userName' => 'Admin',
                'userFullName' => 'Admin'
            );
            return true;
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
}