<?php
$servername = "localhost";
$username = "testuser";
$password = "pw4testuser";
$dbname = "testdb";

// MySQL 接続の作成
$setu = new mysqli($servername, $username, $password, $dbname);

// 接続確認
if ($setu->connect_error) {
    die("接続失敗: " . $setu->connect_error);
}

// データ受け取りの確認
$name = isset($_POST['name']) ? $setu->real_escape_string($_POST['name']) : '';
$email = isset($_POST['email']) ? $setu->real_escape_string($_POST['email']) : '';
$message = isset($_POST['message']) ? $setu->real_escape_string($_POST['message']) : '';

if (empty($name) || empty($email) || empty($message)) {
    die("データが正しく受け取れませんでした: Name=$name, Email=$email, Message=$message");
}

$sql = "INSERT INTO shu (name, email, message) VALUES ('$name', '$email', '$message')";

if ($setu->query($sql) === TRUE) {
    echo "新しいレコードが作成されました";
} else {
    echo "エラー: " . $sql . "<br>" . $setu->error;
}

$setu->close();
?>