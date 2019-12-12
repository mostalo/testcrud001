<?php
  require_once('../connection.php');

  function fnListProducts() {
    $link = getConnection();
    $query = "select * from products";
    $rs = mysqli_query($link, $query);
    $myproducts = array();
    while($row = mysqli_fetch_assoc($rs)) {
      array_push($myproducts, $row);
    }
    return $myproducts;
  }
  ?>