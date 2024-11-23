<?php
header('Content-Type: text/html; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if(isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get form data and sanitize it
    $name = htmlspecialchars(trim($_POST['name']));
    $name = ucwords($name); //Capitalize the first letter
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate the inputs
    if(empty($name) || empty($email) || empty($message)) {
        echo '<h1>Error: All fields are rquired.</h1>';
        exit;
    }

    if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo '<h1>Error: Invalid email address.</h1>';
        exit;
    }

    // Prepare the email (optional)
    $to = 'immabeadwork@gmail.com';
    $subject = "New Contact Form Message from $name";
    $emailBody = "Name: $name\n
    Email: $email\n\n
    Message: \n$message";
    $headers = "From $email";

    mail($to, $subject, $emailBody, $headers);

    // Display a success message
    echo "Thank you $name! Your message has been sent.";
    exit;
}
else {
    echo "Error: Script must be accessed via POST request.";
}
?>