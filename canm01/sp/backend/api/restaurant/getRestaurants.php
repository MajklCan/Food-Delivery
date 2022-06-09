<?php 

  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');

  ini_set('display_errors', '1');
  ini_set('display_startup_errors', '1');
  error_reporting(E_ALL);

  include_once '../../models/restaurant_model.php';


  $requestMethod = strtoupper($_SERVER["REQUEST_METHOD"]);
  //$arrQueryStringParams = $this->getQueryStringParams();

  if ($requestMethod == 'GET') {
      try {
          $Restaurant = new Restaurant();

          // $intLimit = 10;
          // if (isset($arrQueryStringParams['limit']) && $arrQueryStringParams['limit']) {
          //     $intLimit = $arrQueryStringParams['limit'];
          // }

          $content = $Restaurant->getRestaurants();
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

?>