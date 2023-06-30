document.getElementById('Retirer_filtres').addEventListener('click', function () {
    window.location.reload();

})

document.getElementById('add_accident').addEventListener('click', function () {
    let longitude = parseFloat(document.getElementById('longitude_add').value);
    let latitude = parseFloat(document.getElementById('latitude_add').value);
    let ville = document.getElementById('ville_add').value;
    let age = Number(document.getElementById('age_add').value);
    let atmos = Number(document.getElementById('atmo_select_add').value);
    let luminosite = Number(document.getElementById('luminosite_select_add').value);
    let route = Number(document.getElementById('route_select_add').value);
    let securite = Number(document.getElementById('securite_select_add').value);
    let date = document.getElementById('date_add').value;
    let heure = document.getElementById('heure_add').value;

    var to_time = heure + " " + date;
    var datetime = date + " " + heure + ":00";

    if (heure == "") {
        datetime = date + " 00:00:00";
    }
    if (date == "") {
        datetime = heure + ":00";
    }
    if (date == "" && heure == "") {
        datetime = "";
    }

    if (isNaN(longitude)) {
        longitude = "";
    }
    if (isNaN(age)) {
        age = "";
    }
    if (isNaN(latitude)) {
        latitude = "";
    }
    if (ville == "") {
        ville = "";
    }
    if (atmos == "-1") {
        atmos = "";
    }
    if (securite == "-1") {
        securite = "";
    }
    if (route == "-1") {
        route = "";
    }
    if (luminosite == "-1") {
        luminosite = "";
    }
    if (age == 0) {
        age = "";
    }


    if (age != '' && heure != 0 && date != '' && longitude != '' && latitude != '' && ville != '') {
        ajaxRequest('POST', "../php/request.php/add_accident", add_accident, `longitude=${longitude}&latitude=${latitude}&ville=${ville}&age=${age}&luminosite=${luminosite}&atmos=${atmos}&route=${route}&securite=${securite}&date=${datetime}`);
    } else {
        document.getElementById('statue').innerHTML = "Pas assez de paramètres";
    }

})


document.getElementById('filtre_age').addEventListener('change', function () {
    let longitude = parseFloat(document.getElementById('filtre_longitude').value);
    let latitude = parseFloat(document.getElementById('filtre_latitude').value);
    let ville = document.getElementById('filtre_ville').value;
    let age = Number(document.getElementById('filtre_age').value);
    let atmos = Number(document.getElementById('filtre_atmo').value);
    let luminosite = Number(document.getElementById('filtre_luminosite').value);
    let route = Number(document.getElementById('filtre_route').value);
    let securite = Number(document.getElementById('filtre_securite').value);
    let date = document.getElementById('filtre_date').value;
    let heure = document.getElementById('filtre_heure').value;

    var to_time = heure + " " + date;
    var datetime = date + " " + heure + ":00";

    if (heure == "") {
        datetime = date + " 00:00:00";
    }
    if (date == "") {
        datetime = heure + ":00";
    }
    if (date == "" && heure == "") {
        datetime = "";
    }

    if (isNaN(longitude)) {
        longitude = "";
    }
    if (isNaN(age)) {
        age = "";
    }
    if (isNaN(latitude)) {
        latitude = "";
    }
    if (ville == "") {
        ville = "";
    }
    if (atmos == "-1") {
        atmos = "";
    }
    if (securite == "-1") {
        securite = "";
    }
    if (route == "-1") {
        route = "";
    }
    if (luminosite == "-1") {
        luminosite = "";
    }
    if (age == 0) {
        age = "";
    }



    ajaxRequest('GET', `../php/request.php/display_accident/?longitude=${longitude}&latitude=${latitude}&ville=${ville}&age=${age}&atmos=${atmos}&luminosite=${luminosite}&route=${route}&securite=${securite}&date=${datetime}&heure=${heure}`, display_accident)
});

document.getElementById('filtre_date').addEventListener('change', function () {
    let longitude = parseFloat(document.getElementById('filtre_longitude').value);
    let latitude = parseFloat(document.getElementById('filtre_latitude').value);
    let ville = document.getElementById('filtre_ville').value;
    let age = Number(document.getElementById('filtre_age').value);
    let atmos = Number(document.getElementById('filtre_atmo').value);
    let luminosite = Number(document.getElementById('filtre_luminosite').value);
    let route = Number(document.getElementById('filtre_route').value);
    let securite = Number(document.getElementById('filtre_securite').value);
    let date = document.getElementById('filtre_date').value;
    let heure = document.getElementById('filtre_heure').value;

    var to_time = heure + " " + date;
    var datetime = date + " " + heure + ":00";

    if (heure == "") {
        datetime = date + " 00:00:00";
    }
    if (date == "") {
        datetime = heure + ":00";
    }
    if (date == "" && heure == "") {
        datetime = "";
    }

    if (isNaN(longitude)) {
        longitude = "";
    }
    if (isNaN(age)) {
        age = "";
    }
    if (isNaN(latitude)) {
        latitude = "";
    }
    if (ville == "") {
        ville = "";
    }
    if (atmos == "-1") {
        atmos = "";
    }
    if (securite == "-1") {
        securite = "";
    }
    if (route == "-1") {
        route = "";
    }
    if (luminosite == "-1") {
        luminosite = "";
    }
    if (age == 0) {
        age = "";
    }


    ajaxRequest('GET', `../php/request.php/display_accident/?longitude=${longitude}&latitude=${latitude}&ville=${ville}&age=${age}&atmos=${atmos}&luminosite=${luminosite}&route=${route}&securite=${securite}&date=${datetime}&heure=${heure}`, display_accident)

});

document.getElementById('filtre_heure').addEventListener('change', function () {
    let longitude = parseFloat(document.getElementById('filtre_longitude').value);
    let latitude = parseFloat(document.getElementById('filtre_latitude').value);
    let ville = document.getElementById('filtre_ville').value;
    let age = Number(document.getElementById('filtre_age').value);
    let atmos = Number(document.getElementById('filtre_atmo').value);
    let luminosite = Number(document.getElementById('filtre_luminosite').value);
    let route = Number(document.getElementById('filtre_route').value);
    let securite = Number(document.getElementById('filtre_securite').value);
    let date = document.getElementById('filtre_date').value;
    let heure = document.getElementById('filtre_heure').value;

    var to_time = heure + " " + date;
    var datetime = date + " " + heure + ":00";

    if (heure == "") {
        datetime = date + " 00:00:00";
    }
    if (date == "") {
        datetime = heure + ":00";
    }
    if (date == "" && heure == "") {
        datetime = "";
    }

    if (isNaN(longitude)) {
        longitude = "";
    }
    if (isNaN(age)) {
        age = "";
    }
    if (isNaN(latitude)) {
        latitude = "";
    }
    if (ville == "") {
        ville = "";
    }
    if (atmos == "-1") {
        atmos = "";
    }
    if (securite == "-1") {
        securite = "";
    }
    if (route == "-1") {
        route = "";
    }
    if (luminosite == "-1") {
        luminosite = "";
    }
    if (age == 0) {
        age = "";
    }


    ajaxRequest('GET', `../php/request.php/display_accident/?longitude=${longitude}&latitude=${latitude}&ville=${ville}&age=${age}&atmos=${atmos}&luminosite=${luminosite}&route=${route}&securite=${securite}&date=${datetime}&heure=${heure}`, display_accident)

});

document.getElementById('filtre_ville').addEventListener('keyup', function () {
    let longitude = parseFloat(document.getElementById('filtre_longitude').value);
    let latitude = parseFloat(document.getElementById('filtre_latitude').value);
    let ville = document.getElementById('filtre_ville').value;
    let age = Number(document.getElementById('filtre_age').value);
    let atmos = Number(document.getElementById('filtre_atmo').value);
    let luminosite = Number(document.getElementById('filtre_luminosite').value);
    let route = Number(document.getElementById('filtre_route').value);
    let securite = Number(document.getElementById('filtre_securite').value);
    let date = document.getElementById('filtre_date').value;
    let heure = document.getElementById('filtre_heure').value;

    var to_time = heure + " " + date;
    var datetime = date + " " + heure + ":00";

    if (heure == "") {
        datetime = date + " 00:00:00";
    }
    if (date == "") {
        datetime = heure + ":00";
    }
    if (date == "" && heure == "") {
        datetime = "";
    }

    if (isNaN(longitude)) {
        longitude = "";
    }
    if (isNaN(age)) {
        age = "";
    }
    if (isNaN(latitude)) {
        latitude = "";
    }
    if (ville == "") {
        ville = "";
    }
    if (atmos == "-1") {
        atmos = "";
    }
    if (securite == "-1") {
        securite = "";
    }
    if (route == "-1") {
        route = "";
    }
    if (luminosite == "-1") {
        luminosite = "";
    }
    if (age == 0) {
        age = "";
    }


    ajaxRequest('GET', `../php/request.php/display_accident/?longitude=${longitude}&latitude=${latitude}&ville=${ville}&age=${age}&atmos=${atmos}&luminosite=${luminosite}&route=${route}&securite=${securite}&date=${datetime}&heure=${heure}`, display_accident)

});

document.getElementById('filtre_latitude').addEventListener('keyup', function () {
    let longitude = parseFloat(document.getElementById('filtre_longitude').value);
    let latitude = parseFloat(document.getElementById('filtre_latitude').value);
    let ville = document.getElementById('filtre_ville').value;
    let age = Number(document.getElementById('filtre_age').value);
    let atmos = Number(document.getElementById('filtre_atmo').value);
    let luminosite = Number(document.getElementById('filtre_luminosite').value);
    let route = Number(document.getElementById('filtre_route').value);
    let securite = Number(document.getElementById('filtre_securite').value);
    let date = document.getElementById('filtre_date').value;
    let heure = document.getElementById('filtre_heure').value;


    var to_time = heure + " " + date;
    var datetime = date + " " + heure + ":00";

    if (heure == "") {
        datetime = date + " 00:00:00";
    }
    if (date == "") {
        datetime = heure + ":00";
    }
    if (date == "" && heure == "") {
        datetime = "";
    }

    if (isNaN(longitude)) {
        longitude = "";
    }
    if (isNaN(age)) {
        age = "";
    }
    if (isNaN(latitude)) {
        latitude = "";
    }
    if (ville == "") {
        ville = "";
    }
    if (atmos == "-1") {
        atmos = "";
    }
    if (securite == "-1") {
        securite = "";
    }
    if (route == "-1") {
        route = "";
    }
    if (luminosite == "-1") {
        luminosite = "";
    }
    if (age == 0) {
        age = "";
    }


    ajaxRequest('GET', `../php/request.php/display_accident/?longitude=${longitude}&latitude=${latitude}&ville=${ville}&age=${age}&atmos=${atmos}&luminosite=${luminosite}&route=${route}&securite=${securite}&date=${datetime}&heure=${heure}`, display_accident)

});

document.getElementById('filtre_longitude').addEventListener('keyup', function () {
    let longitude = parseFloat(document.getElementById('filtre_longitude').value);
    let latitude = parseFloat(document.getElementById('filtre_latitude').value);
    let ville = document.getElementById('filtre_ville').value;
    let age = Number(document.getElementById('filtre_age').value);
    let atmos = Number(document.getElementById('filtre_atmo').value);
    let luminosite = Number(document.getElementById('filtre_luminosite').value);
    let route = Number(document.getElementById('filtre_route').value);
    let securite = Number(document.getElementById('filtre_securite').value);
    let date = document.getElementById('filtre_date').value;
    let heure = document.getElementById('filtre_heure').value;

    var to_time = heure + " " + date;
    var datetime = date + " " + heure + ":00";

    if (heure == "") {
        datetime = date + " 00:00:00";
    }
    if (date == "") {
        datetime = heure + ":00";
    }
    if (date == "" && heure == "") {
        datetime = "";
    }

    if (isNaN(longitude)) {
        longitude = "";
    }
    if (isNaN(age)) {
        age = "";
    }
    if (isNaN(latitude)) {
        latitude = "";
    }
    if (ville == "") {
        ville = "";
    }
    if (atmos == "-1") {
        atmos = "";
    }
    if (securite == "-1") {
        securite = "";
    }
    if (route == "-1") {
        route = "";
    }
    if (luminosite == "-1") {
        luminosite = "";
    }
    if (age == 0) {
        age = "";
    }



    ajaxRequest('GET', `../php/request.php/display_accident/?longitude=${longitude}&latitude=${latitude}&ville=${ville}&age=${age}&atmos=${atmos}&luminosite=${luminosite}&route=${route}&securite=${securite}&date=${datetime}&heure=${heure}`, display_accident)

});

document.getElementById('filtre_atmo').addEventListener('change', function () {
    let longitude = parseFloat(document.getElementById('filtre_longitude').value);
    let latitude = parseFloat(document.getElementById('filtre_latitude').value);
    let ville = document.getElementById('filtre_ville').value;
    let age = Number(document.getElementById('filtre_age').value);
    let atmos = Number(document.getElementById('filtre_atmo').value);
    let luminosite = Number(document.getElementById('filtre_luminosite').value);
    let route = Number(document.getElementById('filtre_route').value);
    let securite = Number(document.getElementById('filtre_securite').value);
    let date = document.getElementById('filtre_date').value;
    let heure = document.getElementById('filtre_heure').value;

    var to_time = heure + " " + date;
    var datetime = date + " " + heure + ":00";

    if (heure == "") {
        datetime = date + " 00:00:00";
    }
    if (date == "") {
        datetime = heure + ":00";
    }
    if (date == "" && heure == "") {
        datetime = "";
    }

    if (isNaN(longitude)) {
        longitude = "";
    }
    if (isNaN(age)) {
        age = "";
    }
    if (isNaN(latitude)) {
        latitude = "";
    }
    if (ville == "") {
        ville = "";
    }
    if (atmos == "-1") {
        atmos = "";
    }
    if (securite == "-1") {
        securite = "";
    }
    if (route == "-1") {
        route = "";
    }
    if (luminosite == "-1") {
        luminosite = "";
    }
    if (age == 0) {
        age = "";
    }


    ajaxRequest('GET', `../php/request.php/display_accident/?longitude=${longitude}&latitude=${latitude}&ville=${ville}&age=${age}&atmos=${atmos}&luminosite=${luminosite}&route=${route}&securite=${securite}&date=${datetime}&heure=${heure}`, display_accident)

});

document.getElementById('filtre_luminosite').addEventListener('change', function () {
    let longitude = parseFloat(document.getElementById('filtre_longitude').value);
    let latitude = parseFloat(document.getElementById('filtre_latitude').value);
    let ville = document.getElementById('filtre_ville').value;
    let age = Number(document.getElementById('filtre_age').value);
    let atmos = Number(document.getElementById('filtre_atmo').value);
    let luminosite = Number(document.getElementById('filtre_luminosite').value);
    let route = Number(document.getElementById('filtre_route').value);
    let securite = Number(document.getElementById('filtre_securite').value);
    let date = document.getElementById('filtre_date').value;
    let heure = document.getElementById('filtre_heure').value;

    var to_time = heure + " " + date;
    var datetime = date + " " + heure + ":00";

    if (heure == "") {
        datetime = date + " 00:00:00";
    }
    if (date == "") {
        datetime = heure + ":00";
    }
    if (date == "" && heure == "") {
        datetime = "";
    }

    if (isNaN(longitude)) {
        longitude = "";
    }
    if (isNaN(age)) {
        age = "";
    }
    if (isNaN(latitude)) {
        latitude = "";
    }
    if (ville == "") {
        ville = "";
    }
    if (atmos == "-1") {
        atmos = "";
    }
    if (securite == "-1") {
        securite = "";
    }
    if (route == "-1") {
        route = "";
    }
    if (luminosite == "-1") {
        luminosite = "";
    }
    if (age == 0) {
        age = "";
    }


    ajaxRequest('GET', `../php/request.php/display_accident/?longitude=${longitude}&latitude=${latitude}&ville=${ville}&age=${age}&atmos=${atmos}&luminosite=${luminosite}&route=${route}&securite=${securite}&date=${datetime}&heure=${heure}`, display_accident)

});

document.getElementById('filtre_route').addEventListener('change', function () {
    let longitude = parseFloat(document.getElementById('filtre_longitude').value);
    let latitude = parseFloat(document.getElementById('filtre_latitude').value);
    let ville = document.getElementById('filtre_ville').value;
    let age = Number(document.getElementById('filtre_age').value);
    let atmos = Number(document.getElementById('filtre_atmo').value);
    let luminosite = Number(document.getElementById('filtre_luminosite').value);
    let route = Number(document.getElementById('filtre_route').value);
    let securite = Number(document.getElementById('filtre_securite').value);
    let date = document.getElementById('filtre_date').value;
    let heure = document.getElementById('filtre_heure').value;

    var to_time = heure + " " + date;
    var datetime = date + " " + heure + ":00";

    if (heure == "") {
        datetime = date + " 00:00:00";
    }
    if (date == "") {
        datetime = heure + ":00";
    }
    if (date == "" && heure == "") {
        datetime = "";
    }

    if (isNaN(longitude)) {
        longitude = "";
    }
    if (isNaN(age)) {
        age = "";
    }
    if (isNaN(latitude)) {
        latitude = "";
    }
    if (ville == "") {
        ville = "";
    }
    if (atmos == "-1") {
        atmos = "";
    }
    if (securite == "-1") {
        securite = "";
    }
    if (route == "-1") {
        route = "";
    }
    if (luminosite == "-1") {
        luminosite = "";
    }
    if (age == 0) {
        age = "";
    }


    ajaxRequest('GET', `../php/request.php/display_accident/?longitude=${longitude}&latitude=${latitude}&ville=${ville}&age=${age}&atmos=${atmos}&luminosite=${luminosite}&route=${route}&securite=${securite}&date=${datetime}&heure=${heure}`, display_accident)

});


document.getElementById('filtre_securite').addEventListener('change', function () {
    let longitude = parseFloat(document.getElementById('filtre_longitude').value);
    let latitude = parseFloat(document.getElementById('filtre_latitude').value);
    let ville = document.getElementById('filtre_ville').value;
    let age = Number(document.getElementById('filtre_age').value);
    let atmos = Number(document.getElementById('filtre_atmo').value);
    let luminosite = Number(document.getElementById('filtre_luminosite').value);
    let route = Number(document.getElementById('filtre_route').value);
    let securite = Number(document.getElementById('filtre_securite').value);
    let date = document.getElementById('filtre_date').value;
    let heure = document.getElementById('filtre_heure').value;

    var to_time = heure + " " + date;
    var datetime = date + " " + heure + ":00";

    if (heure == "") {
        datetime = date + " 00:00:00";
    }
    if (date == "") {
        datetime = heure + ":00";
    }
    if (date == "" && heure == "") {
        datetime = "";
    }

    if (isNaN(longitude)) {
        longitude = "";
    }
    if (isNaN(age)) {
        age = "";
    }
    if (isNaN(latitude)) {
        latitude = "";
    }
    if (ville == "") {
        ville = "";
    }
    if (atmos == "-1") {
        atmos = "";
    }
    if (securite == "-1") {
        securite = "";
    }
    if (route == "-1") {
        route = "";
    }
    if (luminosite == "-1") {
        luminosite = "";
    }
    if (age == 0) {
        age = "";
    }

    ajaxRequest('GET', `../php/request.php/display_accident/?longitude=${longitude}&latitude=${latitude}&ville=${ville}&age=${age}&atmos=${atmos}&luminosite=${luminosite}&route=${route}&securite=${securite}&date=${datetime}`, display_accident)

});