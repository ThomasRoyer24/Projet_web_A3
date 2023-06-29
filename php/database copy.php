<?php
include 'constants.php';

// Connexion à la base de donées
function dbConnect(){
    try
    {
        $dsn = "mysql:dbname=". DB_NAME .";host=". DB_SERVER .";port=". DB_PORT .";charset=utf8";
        $db = new PDO($dsn, DB_USER, DB_PASSWORD);
    }
    catch (PDOException $exception)
    {
        error_log('Connection error: '.$exception->getMessage());
        return false;
    }
    return $db;
}

function add_accident($db,$longitude,$latitude,$ville,$date,$age,$id_conditions_atmospheriques,$id_luminosite,$id_etat_route,$id_securite){

    try {
        $request = "INSERT INTO accidents (longitude,latitude,ville,date,age,id_conditions_atmospheriques,id_luminosite,id_etat_route,id_securite) VALUES (:longitude,:latitude,:ville,:date,:age,:id_conditions_atmospheriques,:id_luminosite,:id_etat_route,:id_securite)";
        $statement = $db->prepare($request);

        $statement->bindParam(':longitude', $longitude);
        $statement->bindParam(':latitude', $latitude);
        $statement->bindParam(':ville', $ville);
        $statement->bindParam(':date', $date);
        $statement->bindParam(':age', $age);
        $statement->bindParam(':id_conditions_atmospheriques', $id_conditions_atmospheriques);
        $statement->bindParam(':id_luminosite', $id_luminosite);
        $statement->bindParam(':id_etat_route', $id_etat_route);
        $statement->bindParam(':id_securite', $id_securite);

        $statement->execute();
        $response['isSuccess'] = true;
        return $response;
    }
    catch (PDOException $exception){
        $response['error'] = $exception->getMessage();
        $response['isSuccess'] = false;
        return $response;
    }
}

function filtre_accident($db,$longitude,$latitude,$ville,$date,$age,$id_conditions_atmospheriques,$id_luminosite,$id_etat_route,$id_securite){
    try {
        $request = "SELECT * FROM accidents WHERE COALESCE(age, '') LIKE CONCAT(:age, '%') and COALESCE(ville, '') LIKE CONCAT(:ville, '%') and longitude LIKE concat(:longitude,'%')  AND latitude LIKE concat(:latitude,'%') and id_conditions_atmospheriques LIKE concat(:id_conditions_atmospheriques,'%') AND id_luminosite LIKE concat(:id_luminosite,'%') and id_etat_route LIKE concat(:id_etat_route,'%') and id_securite LIKE concat(:id_securite,'%')";
        $statement = $db->prepare($request);

        $statement->bindParam(':longitude', $longitude);
        $statement->bindParam(':latitude', $latitude);
        $statement->bindParam(':ville', $ville);
        // $statement->bindParam(':date', $date);
        $statement->bindParam(':age', $age);
        $statement->bindParam(':id_conditions_atmospheriques', $id_conditions_atmospheriques);
        $statement->bindParam(':id_luminosite', $id_luminosite);
        $statement->bindParam(':id_etat_route', $id_etat_route);
        $statement->bindParam(':id_securite', $id_securite);

        $statement->execute();
        $response['isSuccess'] = true;
        $response['result'] = $statement->fetchAll(PDO::FETCH_ASSOC);
        return $response;
    }
    catch (PDOException $exception){
        $response['error'] = $exception->getMessage();
        $response['isSuccess'] = false;
        return $response;
    }
}

function get_luminosite($db){

    
    try
    {
        $request = "SELECT * from luminosite";    
        $statement = $db->prepare($request);
        $statement->execute();
        $result = $statement->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }
    catch (PDOException $exception)
    {
        error_log('Request error: '.$exception->getMessage());
        $response['success'] = false;
        return $response;
    }
    return $response;


}

function get_securite($db){
    try
    {
        $request = "SELECT * from securite";    
        $statement = $db->prepare($request);
        $statement->execute();
        $result = $statement->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }
    catch (PDOException $exception)
    {
        error_log('Request error: '.$exception->getMessage());
        $response['success'] = false;
        return $response;
    }
    return $response;
}

function get_atmos($db){
    try
    {
        $request = "SELECT * from conditions_atmospheriques";    
        $statement = $db->prepare($request);
        $statement->execute();
        $result = $statement->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }
    catch (PDOException $exception)
    {
        error_log('Request error: '.$exception->getMessage());
        $response['success'] = false;
        return $response;
    }
    return $response;
}

function get_route($db){
    try
    {
        $request = "SELECT * from etat_route";    
        $statement = $db->prepare($request);
        $statement->execute();
        $result = $statement->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }
    catch (PDOException $exception)
    {
        error_log('Request error: '.$exception->getMessage());
        $response['success'] = false;
        return $response;
    }
    return $response;
}

function get_long_lat($db){
//SELECT * FROM accidents JOIN securite ON accidents.id_securite = securite.id_securite JOIN luminosite ON accidents.id_luminosite = luminosite.id_luminosite JOIN etat_route ON accidents.id_etat_route = etat_route.id_etat_route JOIN conditions_atmospheriques ON accidents.id_conditions_atmospheriques = conditions_atmospheriques.id_conditions_atmospheriques        
    try
    {
        $request = "SELECT * FROM accidents";    
        $statement = $db->query($request);
        $statement->execute();
        $result = $statement->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }
    catch (PDOException $exception)
    {
        error_log('Request error: '.$exception->getMessage());
        $response['success'] = false;
        return $response;
    }
}

function getAccident($db, $id_accident){
    try
    {
        $request = "SELECT latitude, longitude, id_conditions_atmospheriques, id_luminosite, id_etat_route, id_securite FROM accidents WHERE id=:id_accident";    
        $statement = $db->prepare($request);
        $statement->bindParam(':id_accident', $id_accident);
        $statement->execute();
        $result = $statement->fetchAll(PDO::FETCH_ASSOC);
        $result = [$result[0]["latitude"], $result[0]["longitude"], $result[0]["id_conditions_atmospheriques"], $result[0]["id_luminosite"], $result[0]["id_etat_route"], $result[0]["id_securite"]];
        $result = [$result];
        $path_py = "python ../python/export_knn.py ../prerequis/final_data.csv [[".strval($result[0][0]).",".strval($result[0][1]).",".strval($result[0][2]).",".strval($result[0][3]).",".strval($result[0][4]).",".strval($result[0][5])."]]";
        exec($path_py, $output);

        $path_py = "python ../python/export_hl.py SVM [[".strval($result[0][0]).",".strval($result[0][1]).",".strval($result[0][2]).",".strval($result[0][3]).",".strval($result[0][4]).",".strval($result[0][5])."]]";
        exec($path_py, $output);

        $path_py = "python ../python/export_hl.py RF [[".strval($result[0][0]).",".strval($result[0][1]).",".strval($result[0][2]).",".strval($result[0][3]).",".strval($result[0][4]).",".strval($result[0][5])."]]";
        exec($path_py, $output);

        $path_py = "python ../python/export_hl.py MLP [[".strval($result[0][0]).",".strval($result[0][1]).",".strval($result[0][2]).",".strval($result[0][3]).",".strval($result[0][4]).",".strval($result[0][5])."]]";
        exec($path_py, $output);
        
        return $output;
    }
    catch (PDOException $exception)
    {
        error_log('Request error: '.$exception->getMessage());
        $response['success'] = false;
        return $response;
    }
    return $response;
}

function cluster($db){
     try
    {
        $request = "SELECT * FROM accidents";    
        $statement = $db->query($request);
        $statement->execute();
        $result = $statement->fetchAll(PDO::FETCH_ASSOC);
        copy("../prerequis/final_data.csv", "../prerequis/final_data_cluster.csv");
        $max = sizeof($result);        
        $id_start = 72441;
        $id_end = 144880;
        $tab_var = array('id','latitude', 'longitude', 'id_conditions_atmospheriques','id_luminosite','id_etat_route','id_securite');

        $tab_temp = array();

        $fp = fopen('../prerequis/final_data_cluster.csv', 'a+');
        for ($i = 1; $i < ($max - ($id_end - $id_start)); $i++){

             for ($j = 1; $j < 7; $j++){
               array_push($tab_temp, $result[($id_end - $id_start) + $i][$tab_var[$j]]);
            }
           fputcsv($fp, $tab_temp);
           $tab_temp = array();
        }     
            
        exec("python ../python/export_kmean.py", $output);
        $test = substr($output[0], 1, -1);//retire le premier et dernier char
        $output = explode(", ", $test);
        for ($i = 0; $i < $max; $i++){
            $result[$i]['cluster'] = $output[$result[$i]['id']-$id_start];
        }
        return  $result;
    }
    catch (PDOException $exception)
    {
        error_log('Request error: '.$exception->getMessage());
        $response['success'] = false;
        return $response;
    }
}

?>
