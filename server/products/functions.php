<?php
//this file test
  require('./crud.php');

  function getProducts() {
    if($produtcts = fnListProducts()) {
      return $produtcts;
    }
    return array();
  }
  ?>