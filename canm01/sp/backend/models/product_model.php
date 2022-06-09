<?php
include_once '../../database.php';
class Product {
    private $db;

    // Properties
    public $id;
    public $name;
    public $description;
    public $price;
    public $categoryID;
    public $restaurantID;

    public function __construct() {
      // ulozeni do promenne conn pripojeni k db
      $database = new Database();
      $db = $database->connect();
      $this->db = $db;
    }

    public function getProducts() {

      $sql = "SELECT * FROM Product WHERE CategoryID = $this->categoryID";
      $res = $this->db->query($sql);

        
      $arr = [];
      
      if ($res !== FALSE) {
          while($row = $res->fetch_assoc()) {
              $arr[] = $row;
        }
      }
      return json_encode($arr, JSON_UNESCAPED_UNICODE);
    }

    public function getProductById() {

      $sql = "SELECT * FROM Product WHERE ProductID = $this->id";
      $res = $this->db->query($sql);
        
      $arr = [];
      
      if ($res !== FALSE) {
          while($row = $res->fetch_assoc()) {
              $arr[] = $row;
        }
      }
      return json_encode($arr, JSON_UNESCAPED_UNICODE);
    }

    public function deleteProduct() {

      $sql = "DELETE FROM Product WHERE ProductID = $this->id";
      $res = $this->db->query($sql);

      if($res) {
        echo "produkt uspesne smazana";
      } else {
        echo  $sql;
      }
    }
    public function createProduct() {

      $sql = "INSERT INTO Product VALUES (null, '$this->name', '$this->description', $this->price, $this->categoryID, $this->restaurantID)";
      $res = $this->db->query($sql);

      if($res) {
        echo "produkt uspesne vytvoren";
      } else {
        echo  $sql;
      }
    }
    public function updateProduct() {
      $sql = "UPDATE Product SET Name='$this->name', Description='$this->description', Price=$this->price WHERE ProductID = $this->id";
      $res = $this->db->query($sql);

      if($res) {
        echo "produkt uspesne upraven";
      } else {
        echo  $sql;
      }
    }
}

?>