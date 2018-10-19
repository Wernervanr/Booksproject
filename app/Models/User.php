<?php
/**
 * Created by PhpStorm.
 * User: wernervanranderaat
 * Date: 2018-10-19
 * Time: 11:08
 */

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
}