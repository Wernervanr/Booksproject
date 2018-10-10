<?php

namespace App\Controllers\Api;

use App\Controllers\BaseController;
use App\Models\Contact;
use Exception;

class ContactController extends BaseController
{
    public function getSuggestions() {

        $suggestionModel = new Contact();

        $suggestions = $suggestionModel->all();

        $this->renderJson(200, $suggestions);
    }

    public function createSuggestion() {
        $suggestionModel = new Contact();

        $suggestion = json_decode(file_get_contents("php://input"));

        $fields = [
            'fullname' => $suggestion->fullname,
            'email' => $suggestion->email,
            'subject' => $suggestion->subject,
            'message_content' => $suggestion->message_content
        ];

        $suggestionModel->save($fields);
    }

    public function deleteSuggestion() {
        $id = $_GET['id'] ?? null;

        $suggestionModel = new Contact();

        $suggestionModel->delete($id);
    }
}