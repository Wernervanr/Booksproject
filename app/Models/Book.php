<?php

namespace App\Models;

class Book extends Database
{
    private $table_name = "books";
    private $primary_key = "id";

    public function all()
    {
        return $this->getAll("SELECT * FROM {$this->table_name};");
    }

    public function one($id = null)
    {
        return $this->getOne("SELECT * FROM {$this->table_name} WHERE {$this->primary_key} = :id;", ['id' => $id]);
    }

    public function last()
    {
       return $this->getOne("SELECT * FROM {$this->table_name} ORDER BY {$this->table_name}.id DESC LIMIT 1;");
    }

    public function MostPopulair()
    {
        return $this->getOne("SELECT * FROM {$this->table_name} ORDER BY {$this->table_name}.votes DESC LIMIT 1;");
    }

    public function recommended()
    {
        return $this->getAll("SELECT * FROM {$this->table_name} ORDER BY {$this->table_name}.price DESC LIMIT 3;");
    }

    public function save($columns = [], $id = null)
    {
        if (!empty($id)){
            //update
            $columns['id'] = $id;
            $columns['updated_at'] = date("Y-m-d H:i:s");
            $this->execute("
                UPDATE {$this->table_name} SET
                    publisher = :publisher,
                    title = :title,
                    description = :description,
                    price = :price,
                    updated_at = :updated_at,
                    series_no = :series_no
                WHERE {$this->primary_key} = :id
                ", $columns);
        }
        else
        {
            //insert
            $columns['created_at'] = date("Y-m-d H:i:s");
            $return = $this->execute("    
            INSERT INTO {$this->table_name} (publisher, title, description, price, created_at, series_no)
            VALUES (
                    :publisher,
                    :title,
                    :description,
                    :price,
                    :created_at,
                    :series_no
            )
            ", $columns);
            $id = $return->lastInsertId();
        }
        return $id;
    }

    public function delete($id)
    {
        $this->execute("DELETE FROM {$this->table_name} WHERE {$this->primary_key} = :id", ['id' => $id]);
    }

    public function upVote($id)
    {
        $query = "UPDATE
                    {$this->table_name}
                  SET
                   `votes` = `votes` + 1
                  WHERE
                   {$this->primary_key} = :id";
        $this->execute($query, ['id' => $id]);
    }

    public function downVote($id)
    {
        $this->execute("
        UPDATE {$this->table_name} SET `votes` = `votes` - 1
        WHERE {$this->primary_key} = :id
        ", ['id' => $id]);
    }
}
