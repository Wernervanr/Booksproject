<div class="titleCont col-12 d-flex justify-content-center mb-4">
    <h1><?php echo $viewModel['pageTitle'] ?></h1>
</div>

<div>
    <div class="row">
        <div class="col-md-6 text-muted" id="userList">
            <a class="admin-all-users">View all users</a>
            <hr>
        </div>
        <div class="col-md-6 text-muted" id="suggestionList">
            <a class="admin-all-suggestions">View all suggestions</a>
            <hr>
        </div>
    </div>

    <div class="d-none" id="suggestionDisplay">
        <div class="inboxDiv">
            <!--Javascript generated content-->
        </div>
    </div>

    <div class="d-none" id="usersDisplay">
        <div class="userListing">
            <!--Javascript generated content-->
        </div>
    </div>
</div>

<script src="js/admin/admin.js"></script>
<script src="js/admin/inbox/handlers.js"></script>
<script src="js/admin/inbox/inbox.js"></script>
<script src="js/admin/users/handlers.js"></script>
<script src="js/admin/users/users.js"></script>
