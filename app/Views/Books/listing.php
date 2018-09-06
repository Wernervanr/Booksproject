<!--LISTING HEADING-->

<div class="listingHeading">
    <h1 class="col display-1 text-muted"><?php echo $viewModel['pageTitle'] ?></h1>
    <!--Javascript generated welcometext content        -->
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