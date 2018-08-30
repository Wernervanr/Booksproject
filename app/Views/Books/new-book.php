
    <h1><?php echo $viewModel['pageTitle'] ?></h1>

<form novalidate id="createBookForm">
    <div class="row">
        <div class="col-md">

            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" id="title" name="title" class="form-control" required/>
            </div>

            <div class="form-group">
                <label for="author_id">Author</label>
                <input type="number" id="author_id" name="author_id" class="form-control" min="1" required/>
            </div>

            <div class="form-group">
                <label for="category_id">Category</label>
                <input type="number" id="category_id" name="category_id" class="form-control" min="1" required/>
            </div>

            <div class="form-group">
                <label for="isbn">ISBN</label>
                <input type="text" id="isbn" name="isbn" class="form-control" pattern="^\d{10,13}$" required/>
            </div>

            <div class="form-group">
                <label for="price">Price</label>
                <input type="text" id="price" name="price" class="form-control" pattern="^\d{1,5}(\.\d{1,2})?$" required/>
            </div>
        </div>
        <div class="col-md">
            <div class="form-group description-wrapper">
                <label for="description">Description</label>
                <textarea ID="description" name="description" class="form-control"></textarea>
            </div>
        </div>
    </div>

    <hr>

    <div class="col">
        <div class="row justify-content-between">
            <div>
                <button type="button" class="btn btn-info" onClick="window.location = 'index.php'">Back</button>
            </div>
            <div>
                <button type="submit" class="saveBtn btn btn-info" value="Save">Save</button>
            </div>
        </div>
    </div>
</form>

<div class="message-container"></div>

<script src="js/new-book.js"></script>