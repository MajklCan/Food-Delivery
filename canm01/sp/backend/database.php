<?php

ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

class Database {
    function connect() {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $database = "foodDeliveryVse";

        $conn = new mysqli($servername, $username, $password, $database);

        // Check connection
        if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
        }
        // pripojeni se podarilo
        return $conn;
    }
}
?>