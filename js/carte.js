tab_lon = [];
tab_lat = [];
tab_text = [];
tab_color = [];

tab_temp_color = ["black", "white", "red", "green", "yellow", "blue", "gray", "fuchsia", "purple", "#3366FF", "#33FF33", "#FFCC00", "#FF33FF"];

dict_athmo = {3:'Normal',
			  5:'Pluie légère',
			  6:'Temps couvert', 
			  4:'Pluie forte', 
			  7:'Temps éblouissant', 
			  2:'Neige – grêle', 
			  0:'Autre', 
			  1:'Brouillard – fumée', 
			  8:'Vent fort – tempête'}

dict_lum = {0:'Crépuscule ou aube', 
			1:'Nuit avec éclairage public allumé', 
			2:'Nuit avec éclairage public non allumé', 
			3:'Nuit sans éclairage public', 
			4:'Plein jour'}

dict_surf = {7:'Normale', 
			 6:'Mouillée', 
			 8:'Verglacée', 
			 0:'Autre', 
			 3:'Enneigée', 
			 2:'Corps gras – huile', 
			 4:'Flaques', 
			 1:'Boue', 
			 5:'Inondée'}

dict_secu = {14:"Utilisation d'une ceinture de sécurité",
             11:"Utilisation d'un casque",
             7:"Présence d'une ceinture de sécurité - Utilisation non déterminable",
             0:"Autre - Non déterminable",
             3:"Présence d'un casque - Utilisation non déterminable",
             8:"Présence de ceinture de sécurité non utilisée",
             4:"Présence d'un casque non utilisé",
             12:"Utilisation d'un dispositif enfant",
             2:"Autre - Utilisé",
             1:"Autre - Non utilisé",
             13:"Utilisation d'un équipement réfléchissant",
             10:"Présence équipement réfléchissant - Utilisation non déterminable",
             6:"Présence d'un équipement réfléchissant non utilisé",
             9:"Présence dispositif enfant - Utilisation non déterminable",
             5:"Présence d'un dispositif enfant non utilisé"}



function display_long_lat(output) {

	// console.log(output);
	for (var i = 0; i < output.length; i++) {
		//console.log(output[i].longitude);
		tab_lon.push(output[i].longitude);
		tab_lat.push(output[i].latitude);
		tab_text.push(dict_secu[output[i].id_securite]);
		String(tab_text[i]);
		tab_text[i] = "Sécurité: " + tab_text[i].toString() + "<br>Etat route: " + dict_surf[output[i].id_etat_route].toString();
		tab_text[i] = tab_text[i] + "<br>Luminosité: " + dict_lum[output[i].id_luminosite].toString();
		tab_text[i] = tab_text[i] + "<br>Météo: " + dict_athmo[output[i].id_conditions_atmospheriques].toString();
		tab_text[i] = tab_text[i] + "<br>Cluster: " + output[i].cluster;

		if ( document.URL.includes("cluster.html") ) {
			tab_color.push(tab_temp_color[output[i].cluster]);
			
		} else {
			tab_color.push(tab_temp_color[2]);
		}
		
	}
	carte();


	btn = document.getElementById('load');

	size = output.length;
    document.getElementById('div3').innerHTML ="";
    document.getElementById('div4').innerHTML ="";

    iter=30;
    beg=0;

    if (iter > size) {
        btn.style.display="none";
    }
    
    btn.onclick = function() {
        iter+=30;
        beg+=30;

        for (let i = beg; i < iter; i++) {

            document.getElementById('div3').innerHTML += `
            <div class="card">
                            <div class="head_card">
                                <div class="age_card">
                                    <img src="../img/person.svg" alt="person">
                                    <p>${output[i]['age']}</p>
                                </div>
                                <div class="gravite">
                                    <a href="gravite.html?id=${output[i]['id']}">
                                        <p>Gravité</p><img src="../img/right_arrow.svg" alt="pred">
                                    </a>
                                </div>
                            </div>
                            <div class="place_card">
                                <img src="../img/pin.svg" alt="pin">
                                <p>${output[i]['ville']} ${output[i]['latitude']} ${output[i]['longitude']}</p>
                            </div>
                            <div class="time_card">
                                <img src="../img/clock.svg" alt="clock">
                                <p>${output[i]['date']}</p>
                            </div>
                            <div class="atmo_card">
                                <img src="../img/meteo.svg" alt="meteo">
                                <p>${dict_athmo[output[i]['id_conditions_atmospheriques']]}</p>
                            </div>
                            <div class="route_card">
                                <img src="../img/road.svg" alt="road">
                                <p>${dict_surf[output[i]['id_etat_route']]}</p>
                            </div>
                            <div class="luminosite_card">
                                <img src="../img/light.svg" alt="light">
                                <p>${dict_lum[output[i]['id_luminosite']]}</p>
                            </div>
                            <div class="securite_card">
                                <img src="../img/ceinture.svg" alt="ceinture">
                                <p>${dict_secu[output[i]['id_securite']]}</p>
                            </div>
                        </div>
            `;
            i++;
    
            document.getElementById('div4').innerHTML += `
            <div class="card">
                            <div class="head_card">
                                <div class="age_card">
                                    <img src="../img/person.svg" alt="person">
                                    <p>${output[i]['age']}</p>
                                </div>
                                <div class="gravite">
                                    <a href="gravite.html?id=${output[i]['id']}">
                                        <p>Gravité</p><img src="../img/right_arrow.svg" alt="pred">
                                    </a>
                                </div>
                            </div>
                            <div class="place_card">
                                <img src="../img/pin.svg" alt="pin">
                                <p>${output[i]['ville']} ${output[i]['latitude']} ${output[i]['longitude']}</p>
                            </div>
                            <div class="time_card">
                                <img src="../img/clock.svg" alt="clock">
                                <p>${output[i]['date']}</p>
                            </div>
                            <div class="atmo_card">
                                <img src="../img/meteo.svg" alt="meteo">
                                <p>${dict_athmo[output[i]['id_conditions_atmospheriques']]}</p>
                            </div>
                            <div class="route_card">
                                <img src="../img/road.svg" alt="road">
                                <p>${dict_surf[output[i]['id_etat_route']]}</p>
                            </div>
                            <div class="luminosite_card">
                                <img src="../img/light.svg" alt="light">
                                <p>${dict_lum[output[i]['id_luminosite']]}</p>
                            </div>
                            <div class="securite_card">
                                <img src="../img/ceinture.svg" alt="ceinture">
                                <p>${dict_secu[output[i]['id_securite']]}</p>
                            </div>
                        </div>
            `
    
    
        }
    };

    for (let i = beg; i < iter; i++) {

        document.getElementById('div3').innerHTML += `
        <div class="card">
                        <div class="head_card">
                            <div class="age_card">
                                <img src="../img/person.svg" alt="person">
                                <p>${output[i]['age']}</p>
                            </div>
                            <div class="gravite">
                                <a href="gravite.html?id=${output[i]['id']}">
                                    <p>Gravité</p><img src="../img/right_arrow.svg" alt="pred">
                                </a>
                            </div>
                        </div>
                        <div class="place_card">
                            <img src="../img/pin.svg" alt="pin">
                            <p>${output[i]['ville']} ${output[i]['latitude']} ${output[i]['longitude']}</p>
                        </div>
                        <div class="time_card">
                            <img src="../img/clock.svg" alt="clock">
                            <p>${output[i]['date']}</p>
                        </div>
                        <div class="atmo_card">
                            <img src="../img/meteo.svg" alt="meteo">
                            <p>${dict_athmo[output[i]['id_conditions_atmospheriques']]}</p>
                        </div>
                        <div class="route_card">
                            <img src="../img/road.svg" alt="road">
                            <p>${dict_surf[output[i]['id_etat_route']]}</p>
                        </div>
                        <div class="luminosite_card">
                            <img src="../img/light.svg" alt="light">
                            <p>${dict_lum[output[i]['id_luminosite']]}</p>
                        </div>
                        <div class="securite_card">
                            <img src="../img/ceinture.svg" alt="ceinture">
                            <p>${dict_secu[output[i]['id_securite']]}</p>
                        </div>
                    </div>
        `;
        i++;

        document.getElementById('div4').innerHTML += `
        <div class="card">
                        <div class="head_card">
                            <div class="age_card">
                                <img src="../img/person.svg" alt="person">
                                <p>${output[i]['age']}</p>
                            </div>
                            <div class="gravite">
                                <a href="gravite.html?id=${output[i]['id']}">
                                    <p>Gravité</p><img src="../img/right_arrow.svg" alt="pred">
                                </a>
                            </div>
                        </div>
                        <div class="place_card">
                            <img src="../img/pin.svg" alt="pin">
                            <p>${output[i]['ville']} ${output[i]['latitude']} ${output[i]['longitude']}</p>
                        </div>
                        <div class="time_card">
                            <img src="../img/clock.svg" alt="clock">
                            <p>${output[i]['date']}</p>
                        </div>
                        <div class="atmo_card">
                            <img src="../img/meteo.svg" alt="meteo">
                            <p>${dict_athmo[output[i]['id_conditions_atmospheriques']]}</p>
                        </div>
                        <div class="route_card">
                            <img src="../img/road.svg" alt="road">
                            <p>${dict_surf[output[i]['id_etat_route']]}</p>
                        </div>
                        <div class="luminosite_card">
                            <img src="../img/light.svg" alt="light">
                            <p>${dict_lum[output[i]['id_luminosite']]}</p>
                        </div>
                        <div class="securite_card">
                            <img src="../img/ceinture.svg" alt="ceinture">
                            <p>${dict_secu[output[i]['id_securite']]}</p>
                        </div>
                    </div>
        `


    }


}

function carte() {

	var data = [
		{
			type: "scattermapbox",
			text: tab_text,
			lon: tab_lon,
			lat: tab_lat,
			marker: { color: tab_color, size: 7 }
		}
	];

	//console.log(data);

	var layout = {
		dragmode: "zoom",
		mapbox: { style: "open-street-map", center: { lat: 45, lon: 3 }, zoom: 4 },
		margin: { r: 0, t: 0, b: 0, l: 0 }
	};

	Plotly.newPlot("myDiv", data, layout);
	tab_lon = [];
	tab_lat = [];
	tab_text = [];
}





