
<h1 class="display-1 text-muted"><?php echo $viewModel['pageTitle'] ?></h1>
<p>Hi, welcome to the "read only" book catalog. Click our books to see their details!</p>

<div class="col">
<table class="table">
    <thead class="thead-dark"
        <tr>
            <th>Title</th>
            <th class="d-none d-sm-table-cell">Author ID</th>
            <th class="d-none d-sm-table-cell">ISBN</th>
            <th>Price</th>
        </tr>
    </thead>



    <!--            <tr>
                    <td>Clean Code</td>
                    <td>Robert C. Martin</td>
                    <td>978013258383</td>
                    <td>&euro; 29,95</td>
                </tr>
                <tr>
                    <td>Learning PHP Design Patterns</td>
                    <td>William Sanders</td>
                    <td>978210987511</td>
                    <td>&euro; 34,95</td>
                </tr>

                <tr>
                    <td>Don't make me think</td>
                    <td>Steve Krug</td>
                    <td>978210637921</td>
                    <td>&euro; 49,95</td>
                </tr>
    -->
</table>

    <?php if($viewModel['profile']) { ?>
    <div class="row justify-content-end">
        <button type="button" class="btn btn-info" onclick="window.location='?route=create'">New Book</button>
    </div>

    <?php } ?>

</div>

<script src="js/listing.js"></script>