<?php

namespace App\Models;


class Book extends Database
{
    private $table_name = "books";
    private $primary_key = "id";
    private $fillable_columns = ['category_id', 'author_id', 'title', 'description', 'price', 'created_at', 'updated_at', 'isbn'];

    public $sort_columns = [];
    public $sort_directions = [];

    public function all($where = [], $group_by = [], $order_by = [], $start_row = 0, $limit = 1)
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

    public function save($columns = [], $id = null)
    {
        if (!empty($id)){
            //update
            $columns['id'] = $id;
            $columns['updated_at'] = date("Y-m-d H:i:s");
            $this->execute("
                UPDATE {$this->table_name} SET
                    category_id = :category_id,
                    author_id = :author_id,
                    title = :title,
                    description = :description,
                    price = :price,
                    updated_at = :updated_at,
                    isbn = :isbn
                WHERE {$this->primary_key} = :id
                ", $columns);
        }
        else
        {
            //insert
            $columns['created_at'] = date("Y-m-d H:i:s");
            $return = $this->execute("    
            INSERT INTO {$this->table_name} (category_id, author_id, title, description, price, created_at, isbn)
            VALUES (
                    :category_id,
                    :author_id,
                    :title,
                    :description,
                    :price,
                    :created_at,
                    :isbn
            )
            ", $columns);
            $id = $return->lastInsertId();
        }
        return $id;
    }

    public function delete($id = null)
    {
        if (!empty($id)) {
            $return = $this->execute("DELETE FROM {$this->table_name} WHERE {$this->primary_key} = :id", ['id' => $id]);
        }
        return true;
    }

    public function upVote($id = null)
    {
        if (!empty($id)) {
            $return = $this->execute("
            UPDATE {$this->table_name} SET `votes` = `votes` + 1
            WHERE {$this->primary_key} = :id
            ", ['id' => $id]);
        }
        return true;
    }

    public function downVote($id = null)
    {
        if (!empty($id)) {
            $return = $this->execute("
            UPDATE {$this->table_name} SET `votes` = `votes` - 1
            WHERE {$this->primary_key} = :id
            ", ['id' => $id]);
        }
        return true;
    }
}
