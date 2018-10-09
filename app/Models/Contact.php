<?php

namespace App\Models;

class Contact extends Database
{
    private $table_name = "contact";
    private $primary_key = "id";

    public function all()
    {
        return $this->getAll("SELECT * FROM {$this->table_name};");
    }

    public function one($id = null)
    {
        return $this->getOne("SELECT * FROM {$this->table_name} WHERE {$this->primary_key} = :id;", ['id' => $id]);
    }

    public function save($columns = [], $id = null)
    {
        $columns['created_at'] = date("Y-m-d H:i:s");
        $return = $this->execute("    
        INSERT INTO {$this->table_name} (fullname, email, subject, message_content, created_at)
        VALUES (
                :fullname,
                :email,
                :subject,
                :message_content,
                :created_at
        )
        ", $columns);
    }

    public function delete($id)
    {
        $this->execute("DELETE FROM {$this->table_name} WHERE {$this->primary_key} = :id", ['id' => $id]);
    }
}