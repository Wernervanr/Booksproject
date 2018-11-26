<?php

namespace Repositories;

use App\Models\Entities\User;
use App\Models\Interfaces\UserRepositoryInterface;
use DateTime;

class UserRepository extends BaseRepository implements UserRepositoryInterface
{
    private $table_name = "user";

    public function getUser(int $id) : ?User
    {
        $query = "SELECT id, email, firstname, lastname, created, lastlogin FROM {$this->table_name} WHERE id = :id";
        $parameters = [
            'id' => $id
        ];

        $userData = $this->getOne($query, $parameters);

        if ($userData) {
            return $this->createUserObject($userData);
        } else {
            return null;
        }
    }

    public function getAllUsers() : array
    {
        $query = "SELECT * FROM {$this->table_name};";

        $userData = $this->getAll($query);

        if ($userData) {
            $allUsers = [];

            foreach ($userData as $user) {
                $allUsers [] = $this->createUserObject($user);
            }

            return $allUsers;
        } else {
            return [];
        }
    }

    public function login(string $email, string $password) : ?User
    {
        $query = "SELECT * FROM {$this->table_name} WHERE email = :email";
        $parameters = [
            'email' => $email
        ];

        $userData = $this->getOne($query, $parameters);

        if ($userData != false) {
            $hashedPassword = $userData['hash'];
            if (password_verify($password, $hashedPassword))
            {
                return $this->createUserObject($userData);
            }
        }
    }

    public function save(User $user) : void
    {
        if ($user->getId()) {
        // Update

        } else {
        // Create
            $query = "INSERT INTO user (email, `hash`, firstname, lastname) VALUES (:email, :hash, :firstname :lastname)";
            $parameters = [
                'email' => $user->getEmail(),
                'hash' => $user->getHash(),
                'firstname' => $user->getFirstName(),
                'lastname' => $user->getLastName()
            ];

            $this->execute($query, $parameters);
        }
    }

    private function createUserObject($userData) : User
    {
        $user = new User();

        $user->setId($userData['id'])
            ->setEmail($userData['email'])
            ->setFirstName($userData['firstname'])
            ->setLastName($userData['lastname'])
            ->setCreated(new DateTime($userData['created']));

        if ($userData['lastlogin']) {
            $user->setLastLogin(new DateTime($userData['lastlogin']));
        }

        return $user;
    }
}