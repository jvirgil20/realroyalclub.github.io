<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $firstName = $_POST['first-name'];
    $lastName = $_POST['last-name'];
    $email = $_POST['email'];
    $phone = $_POST['phone-number'];
    $message = $_POST['message'];
    
    // Set email variables
    $to = "jvirgil1106@outlook.com";
    $subject = "New form submission";
    $body = "Name: $firstName $lastName\nEmail: $email\nMessage: $message";
    
    // Send email
    if (mail($to, $subject, $body)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email. Please try again later.";
    }
} else {
    // Handle the case when the form is not submitted via POST method
    echo "This script should be accessed via a form submission.";
}
?>
