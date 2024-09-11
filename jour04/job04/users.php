<?php

header("Content-Type: application/json");


$db_user = "root";
$db_password = "root";
$dsn = "mysql:host=localhost; dbname=utilisateurs;charset=utf8";

try {

    $dbconnect = new PDO($dsn,$db_user,$db_password);

    $dbconnect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


    $stmt = $dbconnect->query("SELECT * FROM  utilisateurs");
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($users);

} catch (PDOException $e) {

    echo json_encode([" error " => "connexion à la database échoué " . $e->getMessage() ]);
}


$dbconnect = null;

?>