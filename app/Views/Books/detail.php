<!--DETAIL HEADING-->

<div class="row">
    <div class="titleCont col-12">
        <h1>Comic <?php echo $viewModel['pageTitle'] ?></h1>
        <!--Javascript generated content (h2)-->
    </div>
</div>

<!--DETAIL CONTENT-->

<div class="row">
    <div class="col-md-6">
        <div class="col1 votes mb-2">
            <b>Likes</b>
            <div class="vote-count" data-id="<?php echo $viewModel['book']['id'] ?>">
                <a class="up-vote" href=""><i class="far fa-thumbs-up"></i></a>
                <?php echo $viewModel['book']['votes'] ?> people like this book!
                <a class="down-vote" href=""><i class="far fa-thumbs-down"></i></a>
            </div>
        </div>

        <div class="authorCont">
            <b>Author ID</b>
            <!--Javascript generated content (div)-->
        </div>

        <div class="isbnCont">
            <b>ISBN</b>
            <!--Javascript generated content (div)-->
        </div>

        <div class="priceCont">
            <b>Price</b>
            <!--Javascript generated content (div)-->
        </div>

        <div class="descriptionCont">
            <b>Description</b>
            <!--Javascript generated content (div)-->
        </div>
    </div>

    <div class="col-md-6">
        <?php if ($viewModel['profile']) { ?>
            <form action="?route=upload-image&id=<?php echo $viewModel['book']['id'] ?>" enctype="multipart/form-data" method="post">
                <div class="mb-1"><b>Select image file to upload</b></div>
                <div class="mb-2"><input type="file" name="imageFile" id="imageFile" accept="image/*"/></div>
                <div class="mb-2"><input class="btn btn-comic" type="submit" value="Upload" name="submit" /></div>
            </form>
        <?php } ?>

        <?php if ($viewModel['imagePath']) { ?>
            <img class="mb-4" src="<?php echo $viewModel['imagePath']; ?>" width="300px" />
        <?php } ?>
    </div>
</div>

<hr>

<!--BUTTONS-->
<div class="mt-2 d-flex">
    <div class="p2 mr-auto">
        <button class="btn btn-comic" onClick="window.location = 'index.php'">Back</button>
    </div>

    <?php if ($viewModel['profile']) { ?>
        <div class="p2 row mr-1">
            <button class="btn btn-comic mr-1" onClick="window.location = '?route=edit&id=<?php echo $viewModel['book']['id'] ?>'">Edit book</button>
            <form id="deleteBtn">
                <button class="btn btn-comic" type="submit">Delete</button>
            </form>
        </div>
    <?php } ?>
</div>

<script>let bookId = <?php echo $viewModel['book']['id']; ?>;</script>
<script src="js/detail-listing.js"></script>

<?php if ($viewModel['profile']) { ?>
    <script src="js/delete-book.js"></script>
<?php } ?>

