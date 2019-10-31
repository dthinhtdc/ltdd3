<?php
 include 'DBConfig.php';
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 $json = file_get_contents('php://input');
 $obj = json_decode($json,true);

 $gmail = $obj["email"];
 $taikhoan = $obj["name"];
 $matkhau =$obj["password"];
 
 //Checking Email is already exist or not using SQL query.
 $CheckSQL = "SELECT * FROM user_register WHERE email='$gmail'";

 // Executing SQL Query.
 $check = mysqli_fetch_array(mysqli_query($con,$CheckSQL));

 if(isset($check)){
 
		$EmailExistMSG = 'Email Already Exist, Please Try Again !!!';
 
		// Converting the message into JSON format.
		$EmailExistJson = json_encode($EmailExistMSG);
 
		// Echo the message.
      echo $EmailExistJson ; 
	  
 }else{
 
		$Sql_Query = "INSERT INTO user_register (`name` , `email` ,  `password`) 
		VALUES ('$taikhoan','$gmail','$matkhau')";
 
		if(mysqli_query($con,$Sql_Query)){
			$MSG = 'Successfully' ;
			$json = json_encode($MSG);
			echo $json ; 
		}else{
			echo 'Faild';
			}
}
 mysqli_close($con);
?>