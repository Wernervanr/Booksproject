<!--HEADING-->

<div>
    <h1><?php echo $viewModel['pageTitle'] ?></h1>
    <h2 class="subtitle mt-2"><?php echo $viewModel['book']['title'] ?></h2>
</div>

<!--CONTENT-->
<div>
    <form novalidate id="updateBookForm">
        <div class="form-row">
            <label for="title">Title</label>
            <input type="text" id="title" name="title" value="<?php echo $viewModel['book']['title'] ?>" class="form-control" required/>
        </div>

        <div class="form-row">
            <label for="publisher">Publisher</label>
            <input type="text" id="publisher" name="publisher" class="form-control" value="<?php echo $viewModel['book']['publisher'] ?>" min="1" required/>
        </div>

        <div class="form-row">
            <label for="series_no">Series No.</label>
            <input type="text" id="series_no" name="series_no" class="form-control" value="<?php echo $viewModel['book']['series_no'] ?>" pattern="^\d{1,3}$" required/>
        </div>

        <div class="form-row">
            <label for="price">Price</label>
            <input type="text" id="price" name="price" class="form-control" value="<?php echo $viewModel['book']['price'] ?>" pattern="^\d{1,5}(\.\d{1,2})?$" required/>
        </div>


        <div class="form-row">
            <label for="description">Description</label>
            <textarea class="form-control" id="description" name="description"><?php echo $viewModel['book']['description']; ?></textarea>
        </div>

        <hr>

<!--SAVE BUTTON-->

        <div class="form-submit">
            <input class="btn btn-comic" type="submit" value="Save" />
        </div>
    </form>
</div>

<script>let bookId = <?php echo $viewModel['book']['id']; ?>;</script>
<script src="js/books/update-book.js"></script>