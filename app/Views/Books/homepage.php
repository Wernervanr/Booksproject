            <div>
                <h1 class="display-4 text-center comic mb-4">BEST COMIC BOOK CATALOG</h1>
            </div>

            <div class="row mb-4">
                <div class="d-none d-sm-block newlyAdded order-2 order-sm-2 col-sm-6 col-lg-2 order-lg-1 card">
                    <p class="text-center mt-2"><b>Newly added Comic Book:</b></p>
                </div>

                <div class="mostPopulair order-3 order-sm-3 col-sm-6 col-lg-2 order-lg-3 card">
                    <p class="text-center mt-2"><b>Most popular comic book:</b></p>
                </div>

                <div class="order-1 order-sm-1 order-md-1 col-lg-8 order-lg-2 mb-2 mt-3 text-center">
                    <p>Welcome to the best Comic Book Catalog!</p>
                    <p> Here you'll find information about the most awesome, rare and valueable comic books as well as superheroes and anything geek related.
                    Click on 'catalog' to scroll through a collection of epic comics, or browse through the site to find inspiration for cosplay, recommended
                    'must-have' comic books and trailers for upcoming superhero movies.</p>
                    <p>Want to contact me? Lit up the bat-signal, or simply fill the contact form at the bottom of the website.</p>
                    <img class="d-none d-lg-block my-5" width="100%" src="slides/batsignal.png" alt="Bat signal">
                </div>
            </div>
        </div>
    </div>
</div>

<!--Recommended rare comics section.-->

<div class="ironman parallax"></div>

<div class="container">
    <div class="row">
        <div class="col">
            <div class="recommended order-md-4 mt-4 bg-white" id="recommended">
                <p class="mt-2 mx-1 sectionheader">See our recommended rarest comics below!</p>
            </div>
        </div>
    </div>
    <hr class="d-none d-xl-block">
</div>

<!--Cosplay inspiration section.-->

<div class="d-xl-none superman parallax"></div>

<div class="container mt-4">
    <div id="events">
        <p class="sectionheader">Cosplay inspiration</p>

        <div id="carouselExampleControls" class="carousel slide mt-4" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="slides/blackpanther.jpg" alt="Black Panther">
                    <div class="carousel-caption d-none d-md-block">
                        <p>Marvel Cinematic Universe - The Black Panther</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="slides/goku.jpg" alt="Goku">
                    <div class="carousel-caption d-none d-md-block">
                        <p>Dragonball Z - Goku</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="slides/jessiejames.jpg" alt="Jessie and James">
                    <div class="carousel-caption d-none d-md-block">
                        <p>Pokémon - Team Rocket, Jessie and James</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="slides/hulkbuster.jpg" alt="Hulk Buster">
                    <div class="carousel-caption d-none d-md-block">
                        <p>Marvel Cinematic Universe - Iron Man, Hulkbuster</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="slides/kratoshella.jpg" alt="Kratos and Hella">
                    <div class="carousel-caption d-none d-md-block">
                        <p>God of War and Marvel Cinematic Universe - Kratos and Hella</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="slides/mystique.jpg" alt="Mystique">
                    <div class="carousel-caption d-none d-md-block">
                        <p>Marvel Cinematic Universe - X-men, Mystique</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="slides/starwars.jpg" alt="Star Wars">
                    <div class="carousel-caption d-none d-md-block">
                        <p>Star Wars - Random</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="slides/thejoker.jpg" alt="The Joker">
                    <div class="carousel-caption d-none d-md-block">
                        <p>DC Cinematic Universe - Batman, The Joker</p>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <p class="text-center mt-3">All credits go to the cosplayers of Comic Con, San Diego, 2018.</p>
    </div>
</div>

<!--New movie trailers section.-->
<div class="d-none d-xl-block superman parallax"></div>

<div class="container mb-4 pb-4 d-none d-xl-block mt-4">
    <div class="row">
        <div class="col" id="newmovies">
            <p class="mx-1 sectionheader">Upcoming new movies</p>
            <div class="d-xl-flex mt-4">
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

<div class="contact" id="contact">
    <div class="pt-2">
        <p class="mt-2 mx-1 contactheader">Contact</p>
    </div>

    <div class="d-flex justify-content-center">
        <div class="col-md-6 col-lg-4">
            <form novalidate id="contactForm">
                <div class="col-md">
                    <div class="message-container"></div>
                    <input type="text" id="fullname" name="fullname" class="form-control mb-1" placeholder="What is your name?" required/>
                    <input type="text" id="email" name="email" class="form-control mb-1" placeholder="What is your email?" required/>
                    <input type="text" id="subject" name="subject" class="form-control mb-1" placeholder="What is the subject?" required/>
                    <textarea id="message_content" name="message_content" class="form-control mb-2" placeholder="What's on your mind?" required></textarea>
                </div>
                <div class="d-flex justify-content-center">
                    <button type="submit" class="saveBtn btn btn-comic" value="Send">Send</button>
                </div>
            </form>
        </div>
    </div>
</div>

<?php if ($viewModel['adminProfile']) { ?>
    <script>let profile = 'logged in';</script>
<?php } else {?>
    <script>let profile = null;</script>
<?php } ?>

<script src="js/books/handlers.js"></script>
<script src="js/homepage.js"></script>