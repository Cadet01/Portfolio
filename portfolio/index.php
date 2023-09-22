<?php
if ($_SERVER["REQUEST_METHOD"] == "POST"){
  $name = $_POST["name"];
  $email = $_POST["email"];
  $purpose = $_POST["subject"];
  $message = $_POST["message"];

  $to = "cadetolati@gmail.com";

  $subject = "Contact Form Submission from $name";
  $headers = "From : $email";

  mail($to, $subject, $message, $headers);

  header("Location: sucess.html");
  exit;
  
}
?>