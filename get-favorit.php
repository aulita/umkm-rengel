<?php
header('Content-Type: application/json');
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Koneksi ke database
$conn = new mysqli("localhost", "root", "", "umkm_db");
if ($conn->connect_error) {
    echo json_encode(["error" => "Koneksi gagal: " . $conn->connect_error]);
    exit;
}

// Ambil semua product_id dari tabel favorit
$sql = "SELECT product_id FROM favorit";
$result = $conn->query($sql);

$favorites = [];
if ($result) {
    while ($row = $result->fetch_assoc()) {
        $favorites[] = (int) $row['product_id'];
    }
}

echo json_encode($favorites);

$conn->close();
?>
