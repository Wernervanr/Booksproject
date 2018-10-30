<div class="titleCont col-12 d-flex justify-content-center mb-4">
    <h1><?php echo $viewModel['pageTitle'] ?></h1>
</div>

<div class="col-12 d-flex justify-content-center mb-2">
    <p>Welcome to your profile! Here you can change your profile details, and check the messages you've sent and received.</p>
</div>

<form id="updateUserDetailsForm">
    <div class="row py-2 userDetails">
        <div class="col-6 mb-1 userNameDisplay">
            <div>Username: </div>
            <div class="font-weight-bold"><?php echo $viewModel['profile']['userName']; ?></div>
        </div>
        <div class="col-6 mb-1 emailDisplay">
            <div>E-mail: </div>
            <div class="font-weight-bold"><?php echo $viewModel['profile']['userEmail']; ?></div>
        </div>
        <div class="col-6 mb-1 firstNameDisplay">
            <div>First name: </div>
            <div class="font-weight-bold"><?php echo $viewModel['profile']['userFirstName']; ?></div>
        </div>
        <div class="col-6 mb-1 lastNameDisplay">
            <div>Last name: </div>
            <div class="font-weight-bold"><?php echo $viewModel['profile']['userLastName']; ?></div>
        </div>
    </div>

    <div class="buttonContainer d-flex">
        <button class="btn-comic changeDetailsButton mr-1">Change details</button>
    </div>
</form>

<script>
    const userId = <?php echo $viewModel['profile']['userId']; ?>;
</script>
<script src="js/users/handlers.js"></script>
<script src="js/users/userprofile.js"></script>