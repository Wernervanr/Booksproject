<div class="bookList">

    <h1 class="display-1 text-muted"><?php echo $viewModel['pageTitle'] ?></h1>
    <p>Hi, welcome to the "read only" book catalog. Click our books to see their details!</p>

    <div class="col">
    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th>Title</th>
                <th class="d-none d-sm-table-cell">Author</th>
                <th class="d-none d-sm-table-cell">ISBN</th>
                <th>Price</th>
            </tr>
        </thead>



        <!--            <tr>
                        <td>Clean Code</td>
                        <td>Robert C. Martin</td>
                        <td>978013258383</td>
                        <td>&euro; 29,95</td>
                    </tr>
                    <tr>
                        <td>Learning PHP Design Patterns</td>
                        <td>William Sanders</td>
                        <td>978210987511</td>
                        <td>&euro; 34,95</td>
                    </tr>

                    <tr>
                        <td>Don't make me think</td>
                        <td>Steve Krug</td>
                        <td>978210637921</td>
                        <td>&euro; 49,95</td>
                    </tr>
        -->
    </table>

        <?php if($viewModel['profile']) { ?>
        <div class="row justify-content-end">
            <button type="button" class="btn btn-info" onclick="window.location='?route=create'">New Book</button>
        </div>

        <?php } ?>

    </div>

</div>

<script src="js/listing.js"></script>

<div class="detailBook d-none">

    <h1><?php echo $viewModel['pageTitle'] ?></h1>
    <h2 class="subtitle"><?php echo $viewModel['book']['title'] ?></h2>

    <div class="votes mb-2">
        <div class="vote-count" data-id="<?php echo $viewModel['book']['id'] ?>"><?php echo $viewModel['book']['votes'] ?></div>
        <a class="up-vote" href="#"><i class="far fa-thumbs-up"></i></a>
        <a class="down-vote" href="#"><i class="far fa-thumbs-down"></i></a>
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
                <input type="hidden" id="id" name="id" value="<?php echo $viewModel['book']['id'] ?>"/>
                <button class="btn btn-info" type="submit">Delete</button>
            </form>
        </div>
    </div>
    <script>let bookId = <?php echo $viewModel['book']['id']; ?>;</script>
    <script src="js/detail-listing.js"></script>
    <script src="js/delete-book.js"></script>
</div>