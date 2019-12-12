<?php

  ## Imports
  require('./functions.php');
  require('../http_response.php');
  ## Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');

  if($_SERVER['REQUEST_METHOD'] === 'GET') {
    if(isset($_GET['id'])) {
      echo json_encode(getProdutoById($_GET['id']));
    } else {
      echo json_encode(getProducts());
    }
  }
    ?>