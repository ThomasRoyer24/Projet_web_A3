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
    var selectElement2 = document.getElementById("luminosite_select_add");
    for (var i = 0; i < output.length; i++) {
        var option = document.createElement("option");
        option.value = output[i].id_luminosite;
        option.text = output[i].name;;
        selectElement.add(option);

        var option2 = document.createElement("option");
        option2.value = output[i].id_luminosite;
        option2.text = output[i].name;;
        selectElement2.add(option2);
    }
}

function display_securite(output) {
    var selectElement = document.getElementById("filtre_securite");
    var selectElement2 = document.getElementById("securite_select_add");
    for (var i = 0; i < output.length; i++) {
        var option = document.createElement("option");
        option.value = output[i].id_securite;
        option.text = output[i].name;;
        selectElement.add(option);

        var option2 = document.createElement("option");
        option2.value = output[i].id_securite;
        option2.text = output[i].name;;
        selectElement2.add(option2);
    }
}


function display_atmos(output) {

    var selectElement = document.getElementById("filtre_atmo");
    var selectElement2 = document.getElementById("atmo_select_add");
    for (var i = 0; i < output.length; i++) {
        var option = document.createElement("option");
        option.value = output[i].id_conditions_atmospheriques;
        option.text = output[i].name;
        selectElement.add(option);

        var option2 = document.createElement("option");
        option2.value = output[i].id_conditions_atmospheriques;
        option2.text = output[i].name;
        selectElement2.add(option2);
    }
}

function display_route(output) {
    var selectElement = document.getElementById("filtre_route");
    var selectElement2 = document.getElementById("route_select_add");
    for (var i = 0; i < output.length; i++) {
        var option = document.createElement("option");
        option.value = output[i].id_etat_route;
        option.text = output[i].name;

        var option2 = document.createElement("option");
        option2.value = output[i].id_etat_route;
        option2.text = output[i].name;

        selectElement.add(option);
        selectElement2.add(option2);
    }
}

function add_accident(output) {
    // console.log(output);
}

function get_accident_tab(output) {
    // console.log(output);
}


function display_accident(output) {
    //console.log(output);
    //console.log(iter);
    display_long_lat(output['result']);
    // btn = document.getElementById('load');

    // dict_athmo = {
    //     3: 'Normal',
    //     5: 'Pluie légère',
    //     6: 'Temps couvert',
    //     4: 'Pluie forte',
    //     7: 'Temps éblouissant',
    //     2: 'Neige – grêle',
    //     0: 'Autre',
    //     1: 'Brouillard – fumée',
    //     8: 'Vent fort – tempête'
    // };

    // dict_lum = {
    //     0: 'Crépuscule ou aube',
    //     1: 'Nuit avec éclairage public allumé',
    //     2: 'Nuit avec éclairage public non allumé',
    //     3: 'Nuit sans éclairage public',
    //     4: 'Plein jour'
    // };

    // dict_surf = {
    //     7: 'Normale',
    //     6: 'Mouillée',
    //     8: 'Verglacée',
    //     0: 'Autre',
    //     3: 'Enneigée',
    //     2: 'Corps gras – huile',
    //     4: 'Flaques',
    //     1: 'Boue',
    //     5: 'Inondée'
    // };

    // dict_secu = {
    //     14: "Utilisation d'une ceinture de sécurité",
    //     11: "Utilisation d'un casque",
    //     7: "Présence d'une ceinture de sécurité - Utilisation non déterminable",
    //     0: "Autre - Non déterminable",
    //     3: "Présence d'un casque - Utilisation non déterminable",
    //     8: "Présence de ceinture de sécurité non utilisée",
    //     4: "Présence d'un casque non utilisé",
    //     12: "Utilisation d'un dispositif enfant",
    //     2: "Autre - Utilisé",
    //     1: "Autre - Non utilisé",
    //     13: "Utilisation d'un équipement réfléchissant",
    //     10: "Présence équipement réfléchissant - Utilisation non déterminable",
    //     6: "Présence d'un équipement réfléchissant non utilisé",
    //     9: "Présence dispositif enfant - Utilisation non déterminable",
    //     5: "Présence d'un dispositif enfant non utilisé"
    // };

    // size = output['result'].length;
    // document.getElementById('div3').innerHTML ="";
    // document.getElementById('div4').innerHTML ="";

    // iter=30;
    // beg=0;

    // if (iter > size) {
    //     btn.style.display="none";
    // }

    // if (iter < size) {
    //     btn.style.display="";
    // }
    
    // btn.onclick = function() {
    //     iter+=30;
    //     beg+=30;

    //     for (let i = beg; i < iter; i++) {

    //         document.getElementById('div3').innerHTML += `
    //         <div class="card">
    //                         <div class="head_card">
    //                             <div class="age_card">
    //                                 <img src="../img/person.svg" alt="person">
    //                                 <p>${output['result'][i]['age']}</p>
    //                             </div>
    //                             <div class="gravite">
    //                                 <a href="gravite.html?id=${output['result'][i]['id']}">
    //                                     <p>Gravité</p><img src="../img/right_arrow.svg" alt="pred">
    //                                 </a>
    //                             </div>
    //                         </div>
    //                         <div class="place_card">
    //                             <img src="../img/pin.svg" alt="pin">
    //                             <p>${output['result'][i]['ville']} ${output['result'][i]['latitude']} ${output['result'][i]['longitude']}</p>
    //                         </div>
    //                         <div class="time_card">
    //                             <img src="../img/clock.svg" alt="clock">
    //                             <p>${output['result'][i]['date']}</p>
    //                         </div>
    //                         <div class="atmo_card">
    //                             <img src="../img/meteo.svg" alt="meteo">
    //                             <p>${dict_athmo[output['result'][i]['id_conditions_atmospheriques']]}</p>
    //                         </div>
    //                         <div class="route_card">
    //                             <img src="../img/road.svg" alt="road">
    //                             <p>${dict_surf[output['result'][i]['id_etat_route']]}</p>
    //                         </div>
    //                         <div class="luminosite_card">
    //                             <img src="../img/light.svg" alt="light">
    //                             <p>${dict_lum[output['result'][i]['id_luminosite']]}</p>
    //                         </div>
    //                         <div class="securite_card">
    //                             <img src="../img/ceinture.svg" alt="ceinture">
    //                             <p>${dict_secu[output['result'][i]['id_securite']]}</p>
    //                         </div>
    //                     </div>
    //         `;
    //         i++;
    
    //         document.getElementById('div4').innerHTML += `
    //         <div class="card">
    //                         <div class="head_card">
    //                             <div class="age_card">
    //                                 <img src="../img/person.svg" alt="person">
    //                                 <p>${output['result'][i]['age']}</p>
    //                             </div>
    //                             <div class="gravite">
    //                                 <a href="gravite.html?id=${output['result'][i]['id']}">
    //                                     <p>Gravité</p><img src="../img/right_arrow.svg" alt="pred">
    //                                 </a>
    //                             </div>
    //                         </div>
    //                         <div class="place_card">
    //                             <img src="../img/pin.svg" alt="pin">
    //                             <p>${output['result'][i]['ville']} ${output['result'][i]['latitude']} ${output['result'][i]['longitude']}</p>
    //                         </div>
    //                         <div class="time_card">
    //                             <img src="../img/clock.svg" alt="clock">
    //                             <p>${output['result'][i]['date']}</p>
    //                         </div>
    //                         <div class="atmo_card">
    //                             <img src="../img/meteo.svg" alt="meteo">
    //                             <p>${dict_athmo[output['result'][i]['id_conditions_atmospheriques']]}</p>
    //                         </div>
    //                         <div class="route_card">
    //                             <img src="../img/road.svg" alt="road">
    //                             <p>${dict_surf[output['result'][i]['id_etat_route']]}</p>
    //                         </div>
    //                         <div class="luminosite_card">
    //                             <img src="../img/light.svg" alt="light">
    //                             <p>${dict_lum[output['result'][i]['id_luminosite']]}</p>
    //                         </div>
    //                         <div class="securite_card">
    //                             <img src="../img/ceinture.svg" alt="ceinture">
    //                             <p>${dict_secu[output['result'][i]['id_securite']]}</p>
    //                         </div>
    //                     </div>
    //         `
    
    
    //     }
    // };

    // for (let i = beg; i < iter; i++) {

    //     document.getElementById('div3').innerHTML += `
    //     <div class="card">
    //                     <div class="head_card">
    //                         <div class="age_card">
    //                             <img src="../img/person.svg" alt="person">
    //                             <p>${output['result'][i]['age']}</p>
    //                         </div>
    //                         <div class="gravite">
    //                             <a href="gravite.html?id=${output['result'][i]['id']}">
    //                                 <p>Gravité</p><img src="../img/right_arrow.svg" alt="pred">
    //                             </a>
    //                         </div>
    //                     </div>
    //                     <div class="place_card">
    //                         <img src="../img/pin.svg" alt="pin">
    //                         <p>${output['result'][i]['ville']} ${output['result'][i]['latitude']} ${output['result'][i]['longitude']}</p>
    //                     </div>
    //                     <div class="time_card">
    //                         <img src="../img/clock.svg" alt="clock">
    //                         <p>${output['result'][i]['date']}</p>
    //                     </div>
    //                     <div class="atmo_card">
    //                         <img src="../img/meteo.svg" alt="meteo">
    //                         <p>${dict_athmo[output['result'][i]['id_conditions_atmospheriques']]}</p>
    //                     </div>
    //                     <div class="route_card">
    //                         <img src="../img/road.svg" alt="road">
    //                         <p>${dict_surf[output['result'][i]['id_etat_route']]}</p>
    //                     </div>
    //                     <div class="luminosite_card">
    //                         <img src="../img/light.svg" alt="light">
    //                         <p>${dict_lum[output['result'][i]['id_luminosite']]}</p>
    //                     </div>
    //                     <div class="securite_card">
    //                         <img src="../img/ceinture.svg" alt="ceinture">
    //                         <p>${dict_secu[output['result'][i]['id_securite']]}</p>
    //                     </div>
    //                 </div>
    //     `;
    //     i++;

    //     document.getElementById('div4').innerHTML += `
    //     <div class="card">
    //                     <div class="head_card">
    //                         <div class="age_card">
    //                             <img src="../img/person.svg" alt="person">
    //                             <p>${output['result'][i]['age']}</p>
    //                         </div>
    //                         <div class="gravite">
    //                             <a href="gravite.html?id=${output['result'][i]['id']}">
    //                                 <p>Gravité</p><img src="../img/right_arrow.svg" alt="pred">
    //                             </a>
    //                         </div>
    //                     </div>
    //                     <div class="place_card">
    //                         <img src="../img/pin.svg" alt="pin">
    //                         <p>${output['result'][i]['ville']} ${output['result'][i]['latitude']} ${output['result'][i]['longitude']}</p>
    //                     </div>
    //                     <div class="time_card">
    //                         <img src="../img/clock.svg" alt="clock">
    //                         <p>${output['result'][i]['date']}</p>
    //                     </div>
    //                     <div class="atmo_card">
    //                         <img src="../img/meteo.svg" alt="meteo">
    //                         <p>${dict_athmo[output['result'][i]['id_conditions_atmospheriques']]}</p>
    //                     </div>
    //                     <div class="route_card">
    //                         <img src="../img/road.svg" alt="road">
    //                         <p>${dict_surf[output['result'][i]['id_etat_route']]}</p>
    //                     </div>
    //                     <div class="luminosite_card">
    //                         <img src="../img/light.svg" alt="light">
    //                         <p>${dict_lum[output['result'][i]['id_luminosite']]}</p>
    //                     </div>
    //                     <div class="securite_card">
    //                         <img src="../img/ceinture.svg" alt="ceinture">
    //                         <p>${dict_secu[output['result'][i]['id_securite']]}</p>
    //                     </div>
    //                 </div>
    //     `


    // }
}


ajaxRequest('GET', "../php/request.php/luminosite", display_luminosite);
ajaxRequest('GET', "../php/request.php/securite", display_securite);
ajaxRequest('GET', "../php/request.php/atmos", display_atmos);
ajaxRequest('GET', "../php/request.php/route", display_route);

