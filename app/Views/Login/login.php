<h1><?php echo $viewModel['pageTitle']?></h1>

<p>Please enter your username and password.</p>

<form action="?route=login" method="post">
    <div class="row">
        <div class="col-xs-12 col-md-4">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" name="username" id="username" class="form-control mb-2" />
                <label for="password">Password</label>
                <input type="password" name="password" id="password" class="form-control" />
            </div>
        </div>
    </div>

    <br clear="all" />

    <button type="submit" class="btn btn-comic">Login</button>
</form>