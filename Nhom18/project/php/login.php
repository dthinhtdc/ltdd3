<?php 
include 'DBConfig.php';
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
$json = file_get_contents('php://input');
$obj = json_decode($json,true);

// check connection
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$email = $obj['email'];
$password = $obj['password'];

    $sql = "SELECT * FROM user_register WHERE email='$email' AND password ='$password'";
    $result = mysqli_query($con,$sql);
    $row = mysqli_fetch_array($result);
    if ($row['email'] != "") {
        if ($row['email'] == $email && $row['password'] == $password){
            echo json_encode("true");
        }
        else {
            echo json_encode("false");
        }
    }
    else {
        echo json_encode('try again');
    }

?>