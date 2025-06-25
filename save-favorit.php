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

// Ambil raw JSON dan decode
$input = file_get_contents("php://input");
$data = json_decode($input, true);

if (!$data || !isset($data['id']) || !isset($data['action'])) {
    echo json_encode(["error" => "Data tidak lengkap", "raw" => $input]);
    exit;
}

$id = (int) $data['id'];
$action = $data['action'];

// Jalankan query sesuai aksi
if ($action === "add") {
    $stmt = $conn->prepare("INSERT IGNORE INTO favorit (product_id) VALUES (?)");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    echo json_encode(["status" => "added"]);
} elseif ($action === "remove") {
    $stmt = $conn->prepare("DELETE FROM favorit WHERE product_id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    echo json_encode(["status" => "removed"]);
} else {
    echo json_encode(["error" => "Aksi tidak dikenali"]);
}

$conn->close();
?>
