<?php

if ($_POST['uri']) {

	// init vars
	$appKey = '55f93f2b2997ac8dfb0ae7e230481a33';
	$appVersion ='v3';
	$authToken = isset($_COOKIE['authToken']) ? $_COOKIE['authToken'] : '';
	$userId = isset($_COOKIE['userID']) ? $_COOKIE['userID'] : '';
	//$authToken = '93b2784aa288287195adb0a3b533ab95c89902cd5f8e4a2756173457eaf1b8eb'; //get from cookie
	//$userId = '5bd3057190744a746053951c8daef520'; //get from cookie

	// create service url
	$serviceUrl = 'http://api.social-inertia.com/'.$appVersion.'/';

	// check for required userId
	if (isset($_POST['reqUser'])) {
		if ($_POST['reqUser'] == 1) {
			$serviceUrl .= 'users/'.$userId.'/';
		}
	}
	$uri = $_POST['uri'];
	if ($uri != '/') {
		$serviceUrl .= $uri; // final complete serviceUrl
	}

	// create string query
	$fields = 'appKey='.$appKey;
	foreach ($_POST as $key => $value) {
		$fields .= '&'.$key.'='.$value;
	}
	// check for required auth token
	if (isset($_POST['reqAuth'])) {
		if ($_POST['reqAuth'] == 1) {
			$fields .= '&authToken='.$authToken; // final complete string query
		}
	}

	$serviceUrl .= '?'.$fields;

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $serviceUrl);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

	if ($_POST['method'] == 'POST') {
		curl_setopt($ch, CURLOPT_POST, true);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
	} elseif ($_POST['method'] == 'PUT') {
		curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
		curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
	} elseif ($_POST['method'] == 'DELETE') {
			curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");
			curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
	} else { // defaults to 'GET'
		curl_setopt($ch, CURLOPT_POST, false);
		//curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
	}

	$output = curl_exec($ch);

	//$xml = new SimpleXMLElement($output);
	$info = curl_getinfo($ch);
	curl_close($ch);

	print_r($output);
	//print_r($info);
} /*else {
	header('Location: /');
}*/
