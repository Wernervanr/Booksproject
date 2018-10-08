<!--HEADING-->

    <h1><?php echo $viewModel['pageTitle'] ?></h1>

<!--CONTENT-->
<form novalidate id="createBookForm">
    <div class="row">
        <div class="col-md">

            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" id="title" name="title" class="form-control" required/>
            </div>

            <div class="form-group">
                <label for="publisher">Publisher</label>
                <input type="text" id="publisher" name="publisher" class="form-control" min="1" required/>
            </div>

            <div class="form-group">
                <label for="series_no">Series No.</label>
                <input type="text" id="series_no" name="series_no" class="form-control" pattern="^\d{1,3}$" required/>
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

<!--BUTTONS-->

    <div class="col">
        <div class="row justify-content-between">
            <div>
                <button type="button" class="btn btn-comic" onClick="window.location = 'index.php'">Back</button>
            </div>
            <div>
                <button type="submit" class="saveBtn btn btn-comic" value="Save">Save</button>
            </div>
        </div>
    </div>
</form>

<script src="js/new-book.js"></script>