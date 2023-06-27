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
        $request = "INSERT INTO accidents (longitude,latitude,ville,date,age,id_conditions_atmospheriques,id_luminosite,id_etat_route,id_securite) VALUES (:longitude,:latitude,:ville,:date,:age,:	id_conditions_atmospheriques,:id_luminosite,:id_etat_route,:id_securite)";
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
        $request = "SELECT * FROM accidents WHERE (longitude LIKE :longitude OR latitude LIKE :latitude OR ville LIKE :ville OR date LIKE :date OR age LIKE :age OR id_conditions_atmospheriques LIKE :id_conditions_atmospheriques OR id_luminosite LIKE :id_luminosite OR id_etat_route LIKE :id_etat_route OR id_securite LIKE :id_securite)";
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
?>
