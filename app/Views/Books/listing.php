<!--LISTING HEADING-->

<div class="mb-4">
    <h1 class="col display-3 text-center comic">BEST COMIC BOOK STORE</h1>
</div>

<div class="row mb-4">
    <div class="col-md-3 card mb-2">
        <p class="text-center mt-2"><b>Newly added:</b></p>
            <img class="card-img-top" src=".../100px180/?text=Image cap" alt="Card image cap">
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
    </div>

    <div class="listingHeading col-md-6 mb-2">
        <!--Javascript generated welcometext content        -->
    </div>

    <div class="col-md-3 card mb-2">
        <p class="text-center mt-2"><b>Comic of the month:</b></p>
        <img class="card-img-top" src=".../100px180/?text=Image cap" alt="Card image cap">
        <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
</div>

<!--LISTING CONTENT-->

<div class="col">
    <table class="table">
        <thead class="thead-dark">
        <tr>
            <th>Title</th>
            <th class="d-none d-sm-table-cell">Author ID</th>
            <th class="d-none d-sm-table-cell">ISBN</th>
            <th>Price</th>
            <?php if($viewModel['profile']) { ?>
                <th class="d-none d-sm-table-cell">Delete</th>
            <?php } ?>
        </tr>
        </thead>

        <!--Javascript generated table content        -->

    </table>

    <template id="tableRowTemplate">
        <tr>
            <td class="title"></td>
            <td class="author_id d-none d-sm-table-cell"></td>
            <td class="isbn d-none d-sm-table-cell"></td>
            <td class="price">&euro; </td>
            <?php if($viewModel['profile']) { ?>
                <td class="delete">
                    <button class="btn btn-info btn-delete">Delete</button>
                </td>
            <?php } ?>
        </tr>
    </template>


    <!--LISTING NEW BOOK BUTTON-->

    <?php if($viewModel['profile']) { ?>
        <div class="row justify-content-end">
            <button type="button" class="btn btn-info" onclick="window.location='?route=create'">New Book</button>
        </div>
    <?php } ?>
</div>

<?php if ($viewModel['profile']) { ?>
    <script>let profile = 'logged in';</script>
<?php } else {?>
    <script>let profile = null;</script>
<?php } ?>

<script src="js/book-table-row.js"></script>
<script src="js/listing.js"></script>