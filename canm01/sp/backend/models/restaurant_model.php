<?php
include_once '../../database.php';
class Restaurant {
    private $db;

    // Properties
    public $id;
    public $description;
    public $deliveryPrice;
    public $deliveryEnstimateMin;
    public $openFrom;
    public $openTo;
    public $acceptsFoodVoucher;

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

    public function getRestaurantById() {

      $sql = "SELECT * FROM Restaurant WHERE RestaurantID = $this->id";
      $res = $this->db->query($sql);

        
      $arr = [];
      
      if ($res !== FALSE) {
          while($row = $res->fetch_assoc()) {
              $arr[] = $row;
        }
      }
      return json_encode($arr, JSON_UNESCAPED_UNICODE);
    }

    public function deleteRestaurant() {

      $sql = "DELETE FROM Restaurant WHERE RestaurantID = $this->id";
      $res = $this->db->query($sql);

      if($res) {
        echo "restaurace uspesne smazana";
      } else {
        echo  $sql;
      }
    }
    public function createRestaurant() {

      $sql = "INSERT INTO Restaurant VALUES (null, '$this->description', $this->deliveryPrice, $this->deliveryEnstimateMin, '$this->openFrom', '$this->openTo', $this->acceptsFoodVoucher)";
      $res = $this->db->query($sql);

      if($res) {
        echo "restaurace uspesne vytvorena";
      } else {
        echo  $sql;
      }
    }
    public function updateRestaurant() {
      $sql = "UPDATE Restaurant SET Description='$this->description', DeliveryPrice=$this->deliveryPrice, DeliveryEstimateMin=$this->deliveryEnstimateMin, OpenFrom='$this->openFrom', OpenTo='$this->openTo', AcceptsFoodVoucher=$this->acceptsFoodVoucher WHERE RestaurantID = $this->id";
      $res = $this->db->query($sql);

      if($res) {
        echo "restaurace uspesne upravena";
      } else {
        echo  $sql;
      }
    }
}

?>