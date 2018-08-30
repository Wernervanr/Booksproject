
<h1><?php echo $viewModel['pageTitle'] ?></h1>
<h2 class="subtitle"><?php echo $viewModel['book']['title'] ?></h2>

<div class="votes mb-2">
    <div class="vote-count" data-id="<?php echo $viewModel['book']['id'] ?>"><?php echo $viewModel['book']['votes'] ?></div>
    <a class="up-vote" href=""><i class="far fa-thumbs-up"></i></a>
    <a class="down-vote" href=""><i class="far fa-thumbs-down"></i></a>
</div>

<div class="row">
    <div class="col-md-6">
        <div class="authorCont"><b>Author</b>
        </div>

        <div class="isbnCont"><b>ISBN</b>
        </div>

        <div class="priceCont"><b>Price</b>
        </div>

        <div class="descriptionCont"><b>Description</b>
        </div>
    </div>

    <div class="col-md-6">

        <?php if ($viewModel['imagePath']) { ?>

            <img class="mb-4" src="<?php echo $viewModel['imagePath']; ?>" width="100%" />

        <?php } ?>

        <?php if ($viewModel['profile']) { ?>

            <form action="?route=upload-image&id=<?php echo $viewModel['book']['id'] ?>" enctype="multipart/form-data" method="post">
                <p><b>Select image file to upload</b></p>
                <p><input type="file" name="imageFile" id="imageFile" accept="image/*"/></p>
                <p><input class="btn btn-info" type="submit" value="Upload" name="submit" /></p>
            </form>

        <?php } ?>
    </div>
</div>

<br clear ="all" />

    <div class="d-flex">
        <div class="p2 mr-auto">
            <button class="btn btn-info" onClick="window.location = 'index.php'">Back</button>
        </div>
        <div class="p2 row">
            <button class="btn btn-info mr-1" onClick="window.location = '?route=edit&id=<?php echo $viewModel['book']['id'] ?>'">Edit book</button>
            <form id="deleteBtn">
                <button class="btn btn-info" type="submit">Delete</button>
            </form>
        </div>
    </div>

<script>let bookId = <?php echo $viewModel['book']['id']; ?>;</script>
<script src="js/detail-listing.js"></script>
<script src="js/delete-book.js"></script>
