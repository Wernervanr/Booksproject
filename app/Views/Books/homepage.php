            <div>
                <h1 class="display-3 text-center comic mb-4">BEST COMIC BOOK STORE</h1>
            </div>

            <div class="row mb-4">
                <div class="newlyAdded order-2 order-sm-1 col-sm-6 col-lg-2 order-lg-1 card">
                    <p class="text-center mt-2"><b>Newly added Comic Book:</b></p>
                    <img class="newlyAddedImage card-img-top" alt="Cover of newly added comic">
                </div>

                <div class="mostPopulair order-3 order-sm-2 col-sm-6 col-lg-2 order-lg-3 card">
                    <p class="text-center mt-2"><b>Most popular comic book:</b></p>
                    <img class="mostPopulairImage card-img-top" src="" alt="Cover of most populair comic">
                </div>

                <div class="order-1 order-sm-3 order-md-3 col-lg-8 order-lg-2 mb-2">
                    <p>Hallo</p>
                </div>
            </div>
        </div>
    </div>
</div>

<!--Recommended rare comics section.-->

<div class="ironman parallax"></div>

<div class="container pb-4">
    <div class="row">
        <div class="col">
            <div class="recommended order-md-4 mt-4" id="recommended">
                <p class="mt-2 mx-1 sectionheader">See our recommended rarest comics below!</p>
            </div>
        </div>
    </div>
</div>

<!--Upcoming events sections.-->

<div class="superman parallax"></div>

<div class="container pb-4">
    <div class="row">
        <div class="col">
            <div class="mt-4">
                <p class="mt-2 mx-1 sectionheader">Upcoming Events</p>
            </div>
        </div>
    </div>
</div>

<!--New movie trailers section.-->

<div class="thor parallax"></div>

<div class="container mb-4 pb-4 d-none d-xl-block">
    <div class="row">
        <div class="col">
            <p class="pt-4 mx-1 sectionheader">Upcoming new movies</p>
            <div class="d-flex mt-4">
                <div class="d-block">
                    <iframe class="trailer mr-1" src="https://www.youtube.com/embed/xLCn88bfW1o" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
                <div  class="d-block">
                <iframe class="trailer" src="https://www.youtube.com/embed/Z1BCujX3pw8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
</div>

<!--Contact section.-->

<div class="contact">
    <div class="pt-4">
        <p class="mt-2 mx-1 contactheader">Contact</p>
    </div>
    <p>Contact section</p>

    <div class="d-flex justify-content-center"">
        <button type="button" class="btn btn-comic" onclick="window.location='?route=index#'">Back to top</button>
    </div>
</div>

<?php if ($viewModel['profile']) { ?>
    <script>let profile = 'logged in';</script>
<?php } else {?>
    <script>let profile = null;</script>
<?php } ?>

<script src="js/book-table-row.js"></script>
<script src="js/listing.js"></script>