<!DOCTYPE html>
<html lang = "en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> Document </title>
    </head>
    <body>
        <?php include "koneksi.php"; ?>
        <?php $query = mysqli_query($koneksi, "SELECT * FROM tb_sepeda_motor ORDER BY nama_produk ASC"); ?>
        <h1> Data Sepeda Motor</h1>
        <table border="1" cellpadding="10" cellspacing="0">
            <tr>
                <th>No</th>
                <th>Nama Produk</th>
                <th>Spesifikasi</th>
                <th>QTY</th>
                <th>Harga</th>
            </tr>   
            <?php $no = 1;
            while ($row = mysqli_fetch_assoc($query))   {
            ?>
                <tr>
                    <td><?=  $no++; ?></td>
                    <td><?= $row['nama_produk']; ?></td>
                    <td><?= $row['spesifikasi']; ?></td>
                    <td><?= $row['jumlah_produk']; ?></td>
                    <td><?= $row['harga_produk']; ?></td>
                </tr>
            <?php } ?>
</html>