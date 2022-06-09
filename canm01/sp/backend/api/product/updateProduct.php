<?php 

  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: PUT');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization,X-Requested-With');

  ini_set('display_errors', '1');
  ini_set('display_startup_errors', '1');
  error_reporting(E_ALL);

  include_once '../../models/product_model.php';

  $requestMethod = strtoupper($_SERVER["REQUEST_METHOD"]);

  // get data from frontend
  $data = json_decode(file_get_contents("php://input"));
  
  if ($requestMethod == 'PUT') {
      try {
        $Product = new Product();
        $Product->name = $data->name;
        $Product->description = $data->description;
        $Product->price = $data->price;
        $Product->id = $data->id;
        $content = $Product->updateProduct();
        echo $content;
      } catch (Error $e) {
          echo 'Something went wrong! Please contact support.
          '.$e;
      }
  }elseif($requestMethod == 'POST') {

          echo 'post';
  
  } else {
      echo 'No action assinged to this endpoint + method';
  }