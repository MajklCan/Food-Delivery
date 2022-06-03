<?php
include_once '../../database.php';
class Category {
    private $db;

    // Properties
    public $id;
    public $name;
    public $priority;
    public $restaurantID;

    public function __construct() {
      // ulozeni do promenne conn pripojeni k db
      $database = new Database();
      $db = $database->connect();
      $this->db = $db;
    }

    public function getCategories() {

      $sql = "SELECT * FROM Category WHERE RestaurntID = $this->restaurantID";
      $res = $this->db->query($sql);

        
      $arr = [];
      
      if ($res !== FALSE) {
          while($row = $res->fetch_assoc()) {
              $arr[] = $row;
        }
      }
      return json_encode($arr, JSON_UNESCAPED_UNICODE);
    }

    public function getCategoryById() {

      $sql = "SELECT * FROM Category WHERE CategoryID = $this->id";
      $res = $this->db->query($sql);
        
      $arr = [];
      
      if ($res !== FALSE) {
          while($row = $res->fetch_assoc()) {
              $arr[] = $row;
        }
      }
      return json_encode($arr, JSON_UNESCAPED_UNICODE);
    }

    public function deleteCategory() {

      $sql = "DELETE FROM Category WHERE CategoryID = $this->id";
      $res = $this->db->query($sql);

      if($res) {
        echo "kategorie uspesne smazana";
      } else {
        echo  $sql;
      }
    }
    public function createCategory() {

      $sql = "INSERT INTO Category VALUES (null, '$this->name', $this->priority, $this->restaurantID)";
      $res = $this->db->query($sql);

      if($res) {
        echo "kategorie uspesne vytvorena";
      } else {
        echo  $sql;
      }
    }
    public function updateCategory() {
      $sql = "UPDATE Category SET Name='$this->name', Priority=$this->priority WHERE CategoryID = $this->id";
      $res = $this->db->query($sql);

      if($res) {
        echo "kategorie uspesne upravena";
      } else {
        echo  $sql;
      }
    }
}

?>