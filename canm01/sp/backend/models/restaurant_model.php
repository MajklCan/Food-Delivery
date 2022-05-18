<?php
include_once '../database.php';
class Restaurant {
    private $db;

    public function __construct() {
      // ulozeni do promenne conn pripojeni k db
      $database = new Database();
      $db = $database->connect();
      $this->db = $db;
    }

    public function getRestaurants() {

      $sql = "SELECT * FROM Restaurant";
      $res = $this->db->query($sql);

        
      $arr = [];
      
      if ($res !== FALSE) {
          while($row = $res->fetch_assoc()) {
              $arr[] = $row;
        }
      }
      return json_encode($arr, JSON_UNESCAPED_UNICODE);
    }
}

?>