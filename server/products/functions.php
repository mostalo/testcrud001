<?php
//this file test
  require('./crud.php');

  function getProducts() {
    if($produtcts = fnListProducts()) {
      return $produtcts;
    }
    return array();
  }

  function deleteProduto($id) {
    if(fnDeleteViagem($id)) {
      return true;
    }
    return false;
  }
  ?>