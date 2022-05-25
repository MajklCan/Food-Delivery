<?php 

  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: PUT');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization,X-Requested-With');

  ini_set('display_errors', '1');
  ini_set('display_startup_errors', '1');
  error_reporting(E_ALL);

  include_once '../../models/restaurant_model.php';

  $requestMethod = strtoupper($_SERVER["REQUEST_METHOD"]);

  // get data from frontend
  $data = json_decode(file_get_contents("php://input"));
  
  if ($requestMethod == 'PUT') {
      try {
        $Restaurant = new Restaurant();
        $Restaurant->id = $data->id;
        $Restaurant->description = $data->description;
        $Restaurant->deliveryPrice = $data->deliveryPrice;
        $Restaurant->deliveryEnstimateMin = $data->deliveryEnstimateMin;
        $Restaurant->openFrom= $data->openFrom;
        $Restaurant->openTo = $data->openTo;
        $Restaurant->acceptsFoodVoucher = $data->acceptsFoodVoucher;
        $content = $Restaurant->updateRestaurant();
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