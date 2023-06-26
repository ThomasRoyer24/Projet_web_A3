import pandas as pd
import mysql.connector

# Établir la connexion à la base de données MySQL
conn = mysql.connector.connect(
    host="localhost", user="etu745", password="scnvjots", database="etu745", port="3306"
)

# Créer un curseur pour exécuter des requêtes SQL
cursor = conn.cursor()

delete_query = "DELETE FROM accidents;"
cursor.execute(delete_query)

delete_query = "DELETE FROM luminosite;"
cursor.execute(delete_query)

delete_query = "DELETE FROM etat_route;"
cursor.execute(delete_query)

delete_query = "DELETE FROM securite;"
cursor.execute(delete_query)

delete_query = "DELETE FROM conditions_atmospheriques;"
cursor.execute(delete_query)

# Dictionnaire des valeurs à insérer
valeurs_securite = {
    14: "Utilisation d'une ceinture de sécurité",
    11: "Utilisation d'un casque",
    7: "Présence d'une ceinture de sécurité - Utilisation non déterminable",
    0: "Autre - Non déterminable",
    3: "Présence d'un casque - Utilisation non déterminable",
    8: "Présence de ceinture de sécurité non utilisée",
    4: "Présence d'un casque non utilisé",
    12: "Utilisation d'un dispositif enfant",
    2: "Autre - Utilisé",
    1: "Autre - Non utilisé",
    13: "Utilisation d'un équipement réfléchissant",
    10: "Présence équipement réfléchissant - Utilisation non déterminable",
    6: "Présence d'un équipement réfléchissant non utilisé",
    9: "Présence dispositif enfant - Utilisation non déterminable",
    5: "Présence d'un dispositif enfant non utilisé",
}

# Dictionnaire des valeurs à insérer
valeurs_etat_route = {
    7: "Normale",
    6: "Mouillée",
    8: "Verglacée",
    0: "Autre",
    3: "Enneigée",
    2: "Corps gras – huile",
    4: "Flaques",
    1: "Boue",
    5: "Inondée",
}

insert_query = "INSERT INTO luminosite (id_luminosite, name) VALUES (%s, %s);"
values = [
    (0, "Crépuscule ou aube"),
    (1, "Nuit avec éclairage public allumé"),
    (2, "Nuit avec éclairage public non allumé"),
    (3, "Nuit sans éclairage public"),
    (4, "Plein jour"),
]
cursor.executemany(insert_query, values)

insert_query = "INSERT INTO conditions_atmospheriques (name, id_conditions_atmospheriques) VALUES (%s, %s);"
values = [
    ("Normal", 3),
    ("Pluie légère", 5),
    ("Temps couvert", 6),
    ("Pluie forte", 4),
    ("Temps éblouissant", 7),
    ("Neige – grêle", 2),
    ("Autre", 0),
    ("Brouillard – fumée", 1),
    ("Vent fort – tempête", 8),
]
cursor.executemany(insert_query, values)

# Parcourir le dictionnaire et insérer les valeurs dans la base de données
for id_etat_route, name in valeurs_etat_route.items():
    query = "INSERT INTO etat_route (id_etat_route, name) VALUES (%s, %s);"
    values = (id_etat_route, name)
    cursor.execute(query, values)

# Parcourir le dictionnaire et insérer les valeurs dans la base de données
for id_securite, name in valeurs_securite.items():
    query = "INSERT INTO securite (id_securite, name) VALUES (%s, %s);"
    values = (id_securite, name)
    cursor.execute(query, values)


data = pd.read_csv("final_data.csv")

# Parcourir les lignes du DataFrame et insérer les données dans la base de données
for index, row in data.iterrows():
    latitude = row["latitude"]
    longitude = row["longitude"]
    descr_athmo = row["descr_athmo"]
    descr_lum = row["descr_lum"]
    descr_etat_surf = row["descr_etat_surf"]
    descr_dispo_secu = row["descr_dispo_secu"]

    query = "INSERT INTO accidents (latitude, longitude, id_conditions_atmospheriques, id_luminosite, id_etat_route, id_securite) VALUES (%s, %s, %s, %s, %s, %s);"
    values = (
        latitude,
        longitude,
        descr_athmo,
        descr_lum,
        descr_etat_surf,
        descr_dispo_secu,
    )

    cursor.execute(query, values)

# Valider les modifications dans la base de données
conn.commit()

# Fermer la connexion à la base de données
cursor.close()
conn.close()
