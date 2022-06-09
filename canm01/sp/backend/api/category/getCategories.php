<?php 

  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');

  ini_set('display_errors', '1');
  ini_set('display_startup_errors', '1');
  error_reporting(E_ALL);

  include_once '../../models/category_model.php';


  $requestMethod = strtoupper($_SERVER["REQUEST_METHOD"]);
  $dataId = $_GET["restaurantID"];

  if ($requestMethod == 'GET') {
      try {
          $Category = new Category();
          $Category->restaurantID = $dataId;
          $content = $Category->getCategories();
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