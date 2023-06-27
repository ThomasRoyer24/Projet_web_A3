function ajaxRequest(type, url, callback, data = null) {
    // console.log(url);
    let xhr;
    // Create XML HTTP request.
    xhr = new XMLHttpRequest();
    xhr.open(type, url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // Add the onload function.
    xhr.onload = () => {
        switch (xhr.status) {
            case 200:
            case 201:
                if (callback != undefined) {
                    callback(JSON.parse(xhr.responseText));
                }
                break;
            default:
                httpErrors(xhr.status);
        }
    };

    // Send XML HTTP request.
    xhr.send(data);
}

//------------------------------------------------------------------------------
//--- httpErrors ---------------------------------------------------------------
//------------------------------------------------------------------------------
// Display an error message accordingly to an error code.
// \param errorCode The error code (HTTP status for example).
function httpErrors(errorCode) {
    let messages = {
        400: 'Requête incorrecte',
        401: 'Authentifiez vous',
        403: 'Accès refusé',
        404: 'Page non trouvée',
        500: 'Erreur interne du serveur',
        503: 'Service indisponible'
    };

    // Display error.
    if (errorCode in messages) {
        console.log(errorCode)
    }
}




function display_luminosite(output) {
    var selectElement = document.getElementById("filtre_luminosite");

    for (var i = 0; i < output.length; i++) {
        var option = document.createElement("option");
        option.value = output[i].id_luminosite;
        option.text = output[i].name;;
        selectElement.add(option);
    }
}

function display_securite(output) {
    var selectElement = document.getElementById("filtre_securite");

    for (var i = 0; i < output.length; i++) {
        var option = document.createElement("option");
        option.value = output[i].id_securite;
        option.text = output[i].name;;
        selectElement.add(option);
    }
}


function display_atmos(output) {
    var selectElement = document.getElementById("filtre_atmo");

    for (var i = 0; i < output.length; i++) {
        var option = document.createElement("option");
        option.value = output[i].id_securite;
        option.text = output[i].name;;
        selectElement.add(option);
    }
}

function display_route(output) {
    var selectElement = document.getElementById("filtre_route");

    for (var i = 0; i < output.length; i++) {
        var option = document.createElement("option");
        option.value = output[i].id_securite;
        option.text = output[i].name;;
        selectElement.add(option);
    }
}

ajaxRequest('GET', "../php/request.php/luminosite", display_luminosite);
ajaxRequest('GET', "../php/request.php/securite", display_securite);
ajaxRequest('GET', "../php/request.php/atmos", display_atmos);
ajaxRequest('GET', "../php/request.php/route", display_route);