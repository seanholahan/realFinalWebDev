<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

//Validate first
if(empty($name)||empty($visitor_email)) 
{
    echo "Name and email are mandatory!";
    exit;
}



//$email_from = '';//<== update the email address
$email_subject = "New Form submission";
$email_body = "You received a new message from $name.\n".
    "message:\n $message \n".
    
$to = "stitchophrenicclothing@gmail.com";//<== update the email address
$headers = "From: $visitor_email \r\n";
$headers = "Reply-To: $visitor_email \r\n";
// t0 send the email
mail($to,$email_subject,$email_body,$headers);
// redirect to thank-you page.
header('Location: http://stitchophrenic.com/stitchThanks/');


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
   
?> 