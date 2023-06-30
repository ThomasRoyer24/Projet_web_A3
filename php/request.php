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
if ($requestMethod == 'GET' and $requestRessource == 'longlat') {
    $response= get_long_lat($db);
    echo json_encode($response);
}
if ($requestMethod == 'POST' and $requestRessource == 'add_accident') {
    $longitude=$_POST["longitude"];
    $latitude=$_POST["latitude"];
    $ville=$_POST["ville"];
    $luminosite=$_POST["luminosite"];
    $age=$_POST["age"];
    $atmos=$_POST["atmos"];
    $route=$_POST["route"];
    $securite=$_POST["securite"];
    $date=$_POST["date"];

    $response= add_accident($db,$longitude,$latitude,$ville,$date,$age,$atmos,$luminosite,$route,$securite);
    echo json_encode($response);
}


if ($requestMethod == "GET" && $requestRessource == "id_accident"){
    $id = intval($_GET['id']);
    $response = getAccident($db, $id);
    $json = json_encode($response);
    print($json);
}

if ($requestMethod == 'GET' and $requestRessource == 'cluster') {
    $response= cluster($db);
    echo json_encode($response);
}

if ($requestMethod == 'GET' and $requestRessource == 'display_accident') {
    $longitude = $_GET['longitude'];
    $latitude= $_GET['latitude'];
    $ville= $_GET['ville'];
    $date= $_GET['date'];
    $age= $_GET['age'];
    $id_conditions_atmospheriques= $_GET['atmos'];
    $id_luminosite= $_GET['luminosite'];
    $id_etat_route= $_GET['route'];
    $id_securite= $_GET['securite'];
    $response= filtre_accident($db,$longitude,$latitude,$ville,$date,$age,$id_conditions_atmospheriques,$id_luminosite,$id_etat_route,$id_securite);
    echo json_encode($response);
}
?>