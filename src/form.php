<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Process the form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Send email
    $to = 'a.kizhakke@QFRCA.com';
    $subject = 'New form submission';
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email";

    // Save to submissions dataset
    $filePath = 'forms/submissions.txt';
    $submissionData = "Name: $name\nEmail: $email\nMessage: $message\n\n";
    file_put_contents($filePath, $submissionData, FILE_APPEND);

    // Redirect to success page
    header('Location: success.html');
    exit;
}
?>


