<?php

if ($_REQUEST) {
	$serviceUrl = 'http://api.social-inertia.com/v3/';
	$uri = $_POST['uri'];
	$serviceUrl .= $uri;
	$appKey = '55f93f2b2997ac8dfb0ae7e230481a33';


	$fields = 'appKey='.$appKey;
	foreach ($_POST as $key => $value) {
		$fields .= '&'.$key.'='.$value;
	}

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
} else {
	header('Location: /');
}
