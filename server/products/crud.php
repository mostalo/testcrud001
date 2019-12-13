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

  function fnDeleteViagem($id){
    $link = getConnection();
    $query = "delete from products where id = $id";
    mysqli_query($link, $query);
    if(!mysqli_query($link, $query)) {
      throw new \Exception("Error ao excluir", 1);
      return false;
    }
    return true;
  }
  ?>