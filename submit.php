<?php
    if(isset($_POST['submit'])){
        
        $Name = $_POST['name'];
        $Email = $_POST['email'];
        $Message = $_POST['message'];

        // Configuration
        $host = 'localhost';
        $user = 'root';
        $pass = '';
        $db = 'immabeadwork';
        
        // Database connection
        $conn = new mysqli('localhost','root','','immabeadwork');
        if($conn->connect_error){
            die('Connection failed : ' .$conn->connect_error);
        }
        else{
            $stmt = $conn->prepare('insert into customer_feedback(name, email, message) values(?, ?, ?)');
            $stmt->bind_param('sss',$Name, $Email, $Message); //Name, Email and Message are all string data type
            // if($conn->query($stmt)==TRUE){
            //     header('location: submit.php');
            // }
            // else{
            //     echo 'Error: '.$conn->error;
            // }
            $stmt->execute();
            echo 'Message sent successfully';
            $stmt->close();
            $conn->close();
        }
    }
?>