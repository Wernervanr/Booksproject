<!--LISTING HEADING-->

<div class="listingHeading mb-4">
    <!--Javascript generated welcometext content        -->
</div>

<div class="row mb-1">
    <div class="order-md-3 col-lg-12 order-lg-2 mb-2">
        <div class="listingheader text-center">Our Comics</div>
        <div class="tablediv bg-white">
            <table class="table">
                <thead class="thead-comic-red">
                <tr>
                    <th class="text-center text-sm-left">Comic Book Title</th>
                    <th class="d-none d-sm-table-cell">Publisher</th>
                    <th class="d-none d-sm-table-cell">Series No.</th>
                    <th class="d-none d-sm-table-cell">Price</th>
                    <?php if($viewModel['profile']) { ?>
                        <th class="text-center text-sm-left">Delete</th>
                    <?php } ?>
                </tr>
                </thead>

                <!--Javascript generated table content        -->

            </table>
        </div>

        <template id="tableRowTemplate">
            <tr class="listing">
                <td class="title"></td>
                <td class="publisher d-none d-sm-table-cell"></td>
                <td class="series_no d-none d-sm-table-cell"></td>
                <td class="price d-none d-sm-table-cell">&euro; </td>
                <?php if($viewModel['profile']) { ?>
                    <td class="delete">
                        <button class="btn btn-comic btn-delete">Delete</button>
                    </td>
                <?php } ?>
            </tr>
        </template>


        <!--LISTING NEW BOOK BUTTON-->

        <?php if($viewModel['profile']) { ?>
            <div class="row mt-2 ml-1">
                <button type="button" class="btn btn-comic" onclick="window.location='?route=create'">New Book</button>
            </div>
        <?php } ?>
    </div>
</div>

<?php if ($viewModel['profile']) { ?>
    <script>let profile = 'logged in';</script>
<?php } else {?>
    <script>let profile = null;</script>
<?php } ?>

<script src="js/books/book-table-row.js"></script>
<script src="js/books/listing.js"></script>