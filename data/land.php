<?php
header('Content-type:application/json;charset=UTF-8');

$uname = $_REQUEST['uname'];
$upwd = $_REQUEST['upwd'];
$email = $_REQUEST['email'];
$uphone= $_REQUEST['uphone'];
$age = $_REQUEST['age'];
$birthday = $_REQUEST['birthday'];

$conn = mysqli_connect('127.0.0.1','root','','mz');

//提交SQL
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql = "INSERT INTO mz_user VALUES(NULL,'$uname','$upwd','$email','$uphone','$age','$birthday')";
$result = mysqli_query($conn,$sql);

//创建要输出给客户端的数据
$output = [];
if($result){    //执行成功
    $output['msg'] = 'succ';
//    $output['uid'] = mysqli_insert_id($conn);
}else {         //执行失败
    $output['msg'] = 'err';
//    $output['sql'] = $sql;
}


//把数据编码为JSON字符串
echo json_encode($output);