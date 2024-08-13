<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $to = "inderjeetkaurgill2004@gmail.com";
    $headers = "From: " . $email;

    if(mail($to, $subject, $message, $headers)) {
        echo "Your message has been sent!";
    } else {
        echo "Sorry, something went wrong.";
    }
}
?>
