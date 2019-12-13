<?php

  ## Imports
  require('./functions.php');
  require('../http_response.php');
  ## Headers
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE");
  header('Content-Type: application/json');

  if($_SERVER['REQUEST_METHOD'] === 'GET') {
    if(isset($_GET['id'])) {
      echo json_encode(getProdutoById($_GET['id']));
    } else {
      echo json_encode(getProducts());
    }
  }else if($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $id = json_decode(file_get_contents('php://input'), true);
    if(deleteProduto($id['id'])) {
      echo json_response(200, 'working');
    } else {
      echo json_response(500, 'Server Error! Please Try Again!');
    }
  }

    ?>