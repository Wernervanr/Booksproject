<!--LISTING HEADING-->

<div>
    <h1 class="display-3 text-center comic">BEST COMIC BOOK STORE</h1>
</div>

<div class="listingHeading mb-2">
    <!--Javascript generated welcometext content        -->
</div>

<div class="row mb-1">
    <div class="newlyAdded d-none d-lg-block col-lg-2 order-lg-1 card mb-3">
        <p class="text-center mt-2"><b>Newly added Comic Book:</b></p>
        <img class="newlyAddedImage card-img-top" alt="Cover of newly added comic">
    </div>

    <div class="order-md-3 col-lg-8 order-lg-2 mb-2">
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

    <div class="mostPopulair d-none d-lg-block col-lg-2 order-lg-3 card mb-3">
        <p class="text-center mt-2"><b>Most popular comic book:</b></p>
        <img class="mostPopulairImage card-img-top" src="" alt="Cover of most populair comic">
    </div>


    <div class="recommended order-md-4" id="recommended">
        <p class="mt-2 mx-1 rarestheader">See our recommended rarest comics below!</p>
    </div>
</div>

<div class="d-flex justify-content-center"">
    <button type="button" class="btn btn-comic" onclick="window.location='?route=index#'">Back to top</button>
</div>

<!--LISTING CONTENT-->

<!--<div class="parallax"></div>-->
<!---->
<!--<div style="height:1000px;background-color:red;font-size:36px">-->
<!--    Scroll Up and Down this page to see the parallax scrolling effect.-->
<!--    This div is just here to enable scrolling.-->
<!--    Tip: Try to remove the background-attachment property to remove the scrolling effect.-->
<!--</div>-->

<?php if ($viewModel['profile']) { ?>
    <script>let profile = 'logged in';</script>
<?php } else {?>
    <script>let profile = null;</script>
<?php } ?>

<script src="js/book-table-row.js"></script>
<script src="js/listing.js"></script>