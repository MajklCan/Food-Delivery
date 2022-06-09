<?php 

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
  header('Content-Type: application/json');

  ini_set('display_errors', '1');
  ini_set('display_startup_errors', '1');
  error_reporting(E_ALL);

  include_once '../../models/product_model.php';


  $requestMethod = strtoupper($_SERVER["REQUEST_METHOD"]);
  // get data from frontend
  $data = json_decode(file_get_contents("php://input"));

  if ($requestMethod == 'POST') {
      try {
          $Product = new Product();
          $Product->name = $data->name;
          $Product->description = $data->description;
          $Product->price = $data->price;
          $Product->categoryID = $data->categoryID;
          $Product->restaurantID = $data->restaurantID;
          $content = $Product->createProduct();
          echo $content;
      } catch (Error $e) {
          echo 'Something went wrong! Please contact support.
          '.$e;
      }
  }elseif($requestMethod == 'GET') {

          echo 'get';
  
  } else {
      echo 'No action assinged to this endpoint + method';
  }

?>