<!--DETAIL HEADING-->

<div class="row">
    <div class="titleCont col-12">
        <h1><?php echo $viewModel['pageTitle'] ?></h1>
        <!--Javascript generated content (h2)-->
    </div>
</div>

<!--DETAIL CONTENT-->

<div class="row">
    <div class="order-2 col-md-6 order-md-1">
        <div class="detailContainer">
            <div class="col1 votes mb-2">
                <b>Likes</b>
                <div>
                    <span class="up-vote"><i class="far fa-thumbs-up"></i></span>
                    <span class="vote-count" data-id="<?php echo $viewModel['book']['id'] ?>"><?php echo $viewModel['book']['votes'] ?></span> people like this book!
                    <span class="down-vote"><i class="far fa-thumbs-down"></i></span>
                </div>
            </div>
            <!--Javascript generated content (div)-->
        </div>

        <!--BUTTONS-->
        <div class="mt-2 d-flex">
            <div class="p2 mr-auto">
                <button class="btn btn-comic" onClick="window.location = 'index.php?route=listing'">Back</button>
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
    </div>

    <div class="order-1 d-flex justify-content-center col-md-6 order-md-2">
        <div>
        <?php if ($viewModel['imagePath']) { ?>
            <img class="mb-4" src="<?php echo $viewModel['imagePath']; ?>" width="300px" />
        <?php } ?>

        <?php if ($viewModel['profile']) { ?>
            <form action="?route=upload-image&id=<?php echo $viewModel['book']['id'] ?>" enctype="multipart/form-data" method="post">
                <div class="mb-1"><b>Select image file to upload</b></div>
                <div class="mb-2"><input type="file" name="imageFile" id="imageFile" accept="image/*"/></div>
                <div class="mb-2"><input class="btn btn-comic" type="submit" value="Upload" name="submit" /></div>
            </form>
        <?php } ?>
        </div>
    </div>
</div>

<script>let bookId = <?php echo $viewModel['book']['id']; ?>;</script>
<script src="js/books/handlers.js"></script>
<script src="js/books/detail-listing.js"></script>

<?php if ($viewModel['profile']) { ?>
    <script>let loggedIn = true;</script>
<?php } else { ?>
    <script>let loggedIn = false;</script>
<?php } ?>
