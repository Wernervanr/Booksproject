<h1><?php echo $viewModel['pageTitle']?></h1>

<p>Please fill in your details below.</p>

<form novalidate id="registerForm">
    <div class="row">
        <div class="col-xs-12 col-md-4">
            <div class="message-container"></div>
            <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" class="form-control" required/>
            </div>
            <div class="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" class="form-control" required/>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" class="form-control" required/>
            </div>
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" name="username" id="username" class="form-control" required/>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" class="form-control" required/>
            </div>
        </div>
    </div>

    <button type="submit" class="btn btn-comic">Register</button>
</form>

<script src="js/users/handlers.js"></script>
<script src="js/users/register.js"></script>