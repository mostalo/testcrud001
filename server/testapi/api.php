<?php
header('Access-Control-Allow-Origin: *');
header("Acess-Control-Allow-Credencials: true");
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, X-Requested-With, enctype, Content-Description");
header("Content-Type: application/json; charset=utf-8");

include "lib/DB.php";

$postjson = json_decode(file_get_contents('php://input'), true);


//echo $postjson['action']." -- ";
//echo $postjson['start']." -- ";
//echo $postjson['limit'];

 if($postjson['action'] == 'getdata') {
    $data = array();
    $query = mysqli_query($mysqli, "select * from costumers ORDER BY id DESC LIMIT $postjson[start], $postjson[limit]");
    while($row = mysqli_fetch_array($query)) {
        $data[] = array(
            'id' => $row['id'],
            'name_customer' => $row['name_customer'],
            'desc_customer' => $row['desc_customer']
        );
    }
    //if($query)$result = json_encode(array('success'=>true, 'result'=>$data));
    //else $result = json_encode(array('success'=>false));
    //echo $result;
    echo json_encode($data);

}