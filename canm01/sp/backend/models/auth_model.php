<?php
include_once '../database.php';
class Auth {
    private $db;

    public function __construct() {
      // ulozeni do promenne conn pripojeni k db
      $database = new Database();
      $db = $database->connect();
      $this->db = $db;
    }

    // Přihlášení přes naše údaje v databázi
    // @param email : email uživatele
    // @param password: heslo uživatele
    public function loginLocal($email,$password) {

        

        if(isset($_SESSION["CustomerID"])){

            header('Content-Type: application/json');

            echo json_encode(array(
                "status" => "error",
                "message" => "Already logged in"
            ));
            exit();
        }

        $sql = 'SELECT * FROM Customer WHERE email="' . $email . '"';
        $result = $this->db->query($sql);

        if($result->num_rows > 0){
            $row = $result->fetch_assoc();

            if(password_verify($password, $row["Password"])){
                $_SESSION["CustomerID"] = $row["CustomerID"];
                //$_SESSION["is_admin"] = $row["is_coach"];

                header('Content-Type: application/json');
                
                echo json_encode(array(
                    "status" => "ok",
                    "user" => array(
                        "CustomerID" => $_SESSION["CustomerID"]
                    ),
                ));
                
            } else {
                header('Content-Type: application/json');

                echo json_encode(array(
                    "status" => "error",
                    "message" => "Wrong password",
                ));
            }
        } else{
            header('Content-Type: application/json');

            echo json_encode(array(
                "status" => "error",
                "message" => "Wrong email",
            ));
        }
    }
}

?>