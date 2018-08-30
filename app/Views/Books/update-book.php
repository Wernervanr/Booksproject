    <h1><?php echo $viewModel['pageTitle'] ?></h1>

<form novalidate id="updateBookForm">

    <div class="form-row">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" value="<?php echo $viewModel['book']['title'] ?>" class="form-control" required/>
    </div>

    <div class="form-row">
        <label for="author">Author ID</label>
        <input type="text" id="author" name="author" class="form-control" value="<?php echo $viewModel['book']['author_id'] ?>" min="1" required/>
    </div>

    <div class="form-row">
        <label for="category">Category ID</label>
        <input type="text" id="category" name="category" class="form-control" value="<?php echo $viewModel['book']['category_id'] ?>" min="1" required/>
    </div>

    <div class="form-row">
        <label for="isbn">ISBN</label>
        <input type="text" id="isbn" name="isbn" class="form-control" value="<?php echo $viewModel['book']['isbn'] ?>" pattern="^\d{10,13}$" required/>
    </div>

    <div class="form-row">
        <label for="price">Price</label>
        <input type="text" id="price" name="price" class="form-control" value="<?php echo $viewModel['book']['price'] ?>" pattern="^\d{1,5}(\.\d{1,2})?$" required/>
    </div>


    <div class="form-description">
        <label for="description">Description</label>
        <textarea class="form-control" id="description" name="description"><?php echo $viewModel['book']['description']; ?></textarea>
    </div>

    <div class="form-submit">
        <input type="submit" value="Save" />
    </div>

</form>


<!-- 28 augustus-->
<hr>

<div class="message-container"></div>

<script>let bookId = <?php echo $viewModel['book']['id']; ?>;</script>
<script src="js/update-book.js"></script>

<!--end 28 augustus-->