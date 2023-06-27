<?php
require_once('database.php');
$db = dbConnect();

// Check the request.
$requestMethod = $_SERVER['REQUEST_METHOD'];
$request = substr($_SERVER['PATH_INFO'], 1);
$request = explode('/', $request);
$requestRessource = array_shift($request);

if ($requestMethod == 'GET' and $requestRessource == 'luminosite') {
    $response= get_luminosite($db);
    echo json_encode($response);
}
if ($requestMethod == 'GET' and $requestRessource == 'securite') {
    $response= get_securite($db);
    echo json_encode($response);
}
if ($requestMethod == 'GET' and $requestRessource == 'atmos') {
    $response= get_atmos($db);
    echo json_encode($response);
}
if ($requestMethod == 'GET' and $requestRessource == 'route') {
    $response= get_route($db);
    echo json_encode($response);
}

?>