<?php 
if(isset($_POST['submit'])){
    $to = "jlv89@miami.edu"; // my email
    $from = $_POST['email']; // sender's email address
    $first_name = $_POST['first-name'];
    $last_name = $_POST['last-name'];
    $subject = "Form submission"; // my copy
    $subject2 = "Copy of your form submission"; // sender copy
    $message = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . $_POST['message'];
    $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to, $subject, $message, $headers);
    mail($from, $subject2, $message2, $headers2); // sends a copy of the message to the sender
    header("Location: sent.html"); 
}
?>