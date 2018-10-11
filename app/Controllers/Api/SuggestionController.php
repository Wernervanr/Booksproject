<?php

namespace App\Controllers\Api;

use App\Controllers\BaseController;
use App\Models\Suggestion;
use Exception;

class SuggestionController extends BaseController
{
    public function getSuggestions() {

        $suggestionModel = new Suggestion();

        $suggestions = $suggestionModel->all();

        $this->renderJson(200, $suggestions);
    }

    public function createSuggestion() {
        $suggestionModel = new Suggestion();

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

        $suggestionModel = new Suggestion();

        $suggestionModel->delete($id);
    }

}