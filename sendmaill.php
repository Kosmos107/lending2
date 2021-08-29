<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMAiler\PHPMAiler\Exception;

require "phpmailer/src/Exception.php";
require "phpmailer/src/PHPMailer.php";

$mail = new PHPMailer(true)
$mail->CharSet = "UTF-8"
$mail->IsHTML(true)

$mail->setFrom("info@gues.com","твой друг")
$mail->addAddress("strateg87@gmail.com")
$mail->Subject = "ZDAROVA"


$body= "<h1>встречай</h1>"
    $body.='<p>'$POST[name]'</p>'
    $body.='<p>'$POST[tel]'</p>'
    $body.='<p>'$POST[email]'</p>'

    $response = ["message"=>$message]
    header(content-type:application/json);
    ech json_encode($response)
>