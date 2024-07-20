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

//最新レコードを削除のSQL
$sql = "DELETE FROM shu ORDER BY id DESC LIMIT 1";

if ($setu->query($sql) === TRUE) {
    echo "最新レコードが削除されました";
} else {
    echo "エラー: " . $sql . "<br>" . $setu->error;
}

$setu->close();
?>