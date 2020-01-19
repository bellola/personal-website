<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require("Exception.php");
require("PHPMailer.php");
require("SMTP.php");

$mail = new PHPMailer();
$mail->IsSMTP();
// $mail->Mailer = "smtp";
$mail->Host = "localhost";
$mail->Port = 25; // 8025, 587 and 25 can also be used. Use Port 465 for SSL.
$mail->SMTPAuth = false;
$mail->SMTPAutoTLS = false; 
$mail->SMTPSecure = 'none';
// $mail->Username = "ctzwlriwswqj";
// $mail->Password = "245Jefferson";

$mail->From = ($_POST['email']);
$mail->FromName = ($_POST['name']);
$mail->AddAddress("luisbg9@gmail.com", "Luis Bello");
$mail->AddReplyTo(($_POST['email']), ($_POST['name']));
$mail->isHTML(true);
$mail->Subject = ($_POST['subject']);
$mail->Body = ($_POST['message']);
$mail->WordWrap = 50;

if(!$mail->Send()) {
echo 'Message was not sent.';
echo 'Mailer error: ' . $mail->ErrorInfo;
exit;
} else {
echo 'Your message has been sent. Thank you!';
}