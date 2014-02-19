<?php

if ($_POST['uri']) {

	// init vars
	//$appKey = '55f93f2b2997ac8dfb0ae7e230481a33'; //v3
	//$appVersion ='v3';
	$appKey = '09d62e05c01b851919a99f32d8242cad02bc0fce';
	$appVersion ='v4';
	$authToken = isset($_COOKIE['authToken']) ? $_COOKIE['authToken'] : '';
	$userId = isset($_COOKIE['userID']) ? $_COOKIE['userID'] : '';
	//$authToken = '93b2784aa288287195adb0a3b533ab95c89902cd5f8e4a2756173457eaf1b8eb'; //get from cookie
	//$userId = '5bd3057190744a746053951c8daef520'; //get from cookie

	// create service url
	$serviceUrl = 'https://api.social-inertia.com/'.$appVersion.'/';

	$uri = $_POST['uri'];
	if ($uri != '/') {
		$serviceUrl .= $uri; // final complete serviceUrl
	}

	// create string query
	$fields = 'appKey='.$appKey;
	// check for required auth token
	if (isset($_POST['reqAuth'])) {
		if ($_POST['reqAuth'] == 1) {
			$fields .= '&authToken='.$authToken; // final complete string query
		}
	}
	// check for required userId
	if (isset($_POST['reqUser'])) {
		if ($_POST['reqUser'] == 1) {
			$fields .= '&userID='.$userId;
		}
	}

	foreach ($_POST as $key => $value) {
		$fields .= '&'.$key.'='.$value;
	}

	$serviceUrl .= '?'.$fields;

	/*error_log('$serviceUrl='.$serviceUrl);
	error_log('$fields='.$fields);
	error_log('$_POST[method]='.$_POST['method']);*/

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $serviceUrl);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_VERBOSE, 1);
	curl_setopt($ch, CURLOPT_HEADER, 1);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/x-www-form-urlencoded'));
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

	if ($_POST['method'] == 'POST') {
		curl_setopt($ch, CURLOPT_POST, true);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
		//error_log('post');
	} elseif ($_POST['method'] == 'PUT') {
		curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
		curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
		//error_log('put');
	} elseif ($_POST['method'] == 'DELETE') {
		curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");
		curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
		//error_log('delete');
	} else { // defaults to 'GET'
		curl_setopt($ch, CURLOPT_POST, false);
		//curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
		//error_log('get');
	}

	$output = curl_exec($ch);

	$header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
	$header = substr($output, 0, $header_size);
	$body = substr($output, $header_size);

	//$xml = new SimpleXMLElement($output);
	//$info = curl_getinfo($ch);
	$status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
	curl_close($ch);
	error_log('DEBUG1 HTTP_CODE='.$status_code);
	//error_log('DEBUG header='.$header);
	//error_log('DEBUG body='.$body);

	print_r($body);
	//error_log("DEBUG:".$output);
	//print_r($info);
} /*else {
	header('Location: /');
}*/
