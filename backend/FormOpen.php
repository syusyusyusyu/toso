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

//レコードを全て画面に表示
$sql = "SELECT * FROM shu";
$result = $setu->query($sql);

if ($result->num_rows > 0) {
    // データを1行ずつ出力
    while($row = $result->fetch_assoc()) {
        echo '<div class="result">';
        echo '<span class="id">' . $row["id"] . '</span> - ';
        echo 'Name：<span class="name">' . $row["name"] . '</span> - ';
        echo 'Email：<span class="email">' . $row["email"] . '</span> - ';
        echo 'Message：<span class="message">' . $row["message"] . '</span>';
        echo '</div>';
    }
} else {
    echo "0 件の結果";
}

$setu->close();
?>