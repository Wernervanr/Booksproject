<div>
    <h1 class="col display-1 text-muted"><?php echo $viewModel['pageTitle'] ?></h1>
    <p class="col">Hi, welcome to the "read only" book catalog. Click our books to see their details!</p>
</div>

<div class="col">
    <table class="table">
        <thead class="thead-dark"
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

    <?php if($viewModel['profile']) { ?>
        <div class="row justify-content-end">
            <button type="button" class="btn btn-info" onclick="window.location='?route=create'">New Book</button>
        </div>
    <?php } ?>
</div>

<script src="js/listing.js"></script>
