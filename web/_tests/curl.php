<?php

$serviceUrl = 'http://api.social-inertia.com/v3/auth/login';
$fields = 'appKey=55f93f2b2997ac8dfb0ae7e230481a33';
//$fields .= '&authToken=44663392271e0fbe498a3b589dd9a7ce';
$fields .= '&email=sparkman@appbuilder360.com';
$fields .= '&password=p@ssoff1';

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $serviceUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
$output = curl_exec($ch);

//$xml = new SimpleXMLElement($output);
$info = curl_getinfo($ch);
curl_close($ch);

print_r($output);
//print_r($info);

?>