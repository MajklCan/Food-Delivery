<?php 

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
    header('Access-Control-Allow-Headers: token, Content-Type');
    header('Access-Control-Max-Age: 1728000');
    header('Content-Type: text/plain');
    



  ini_set('display_errors', '1');
  ini_set('display_startup_errors', '1');
  error_reporting(E_ALL);

  include_once '../models/auth_model.php';


  $requestMethod = strtoupper($_SERVER["REQUEST_METHOD"]);
  //$arrQueryStringParams = $this->getQueryStringParams();

  $Auth = new Auth();
  session_start();

  if ($requestMethod == 'GET') {
      try {
        if(isset($_SESSION["CustomerID"])){

            header('Content-Type: application/json');

           // $_SESSION["CustomerID"] = "1";

            echo json_encode(array(
                "status" => "ok",
                "message" => "Logged in",
                "CustomerID" => $_SESSION["CustomerID"]
            ));
            exit();
        }else{
            header('Content-Type: application/json');
            echo json_encode(array(
                "status" => "error",
                "message" => "Not logged in"
            ));
        }
        //$Auth->getUser()
      } catch (Error $e) {
          echo 'Something went wrong! Please contact support.
          '.$e;
      }
  }elseif($requestMethod == 'POST') {

        

        $request_body = json_decode(file_get_contents('php://input'));

        // $intLimit = 10;
        // if (isset($arrQueryStringParams['limit']) && $arrQueryStringParams['limit']) {
        //     $intLimit = $arrQueryStringParams['limit'];
        // }

        //$content = "Get user";
        //echo $content;

      //   if(isset($_SESSION["CustomerID"])){
      //       return echo "already logged in";
      //   }

        $Auth->loginLocal($request_body->email,$request_body->password);

  
  } else {
      echo 'No action assinged to this endpoint + method';
  }

?>