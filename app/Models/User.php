<?php

namespace App\Models;

class User extends Database

{
    private $table_name = "users";
    private $primary_key = "id";

    public function save($columns = [])
    {
        $columns['role'] = "user";
        $columns['created_at'] = date("Y-m-d H:i:s");
        $return = $this->execute("    
        INSERT INTO {$this->table_name} (username, password, role, first_name, last_name, email, created_at)
        VALUES (
                :username,
                :password,
                :role,
                :first_name,
                :last_name,
                :email,
                :created_at
        )
        ", $columns);
    }

    public function getUser($username)
    {
        $query = "SELECT * FROM {$this->table_name} WHERE username = :username";
        $parameters = [
            'username' => $username
        ];

        $user = $this->getOne($query, $parameters);

        return $user;
    }

    public function getAllUsers()
    {
        $query = "SELECT * FROM {$this->table_name}";

        $users = $this->getAll($query);

        return $users;
    }

    public function delete($id)
    {
        $query = "DELETE FROM {$this->table_name} WHERE {$this->primary_key} = :id";
        $parameters = [
            'id' => $id
        ];

        $this->execute($query, $parameters);
    }
}