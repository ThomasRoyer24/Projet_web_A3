import json
import pandas as pd
# !pip install simplejson
# import simplejson
import sys
from sklearn.cluster import KMeans
import numpy as np


def kmeans_fct():
    data = pd.read_csv("../prerequis/final_data_cluster.csv")
    coordinates = data[['longitude', 'latitude']]  # Extract longitude and latitude columns
    coordinates_array = coordinates.to_numpy()
    k = 3
    kmeans = KMeans(n_clusters=13, max_iter=100)
    kmeans.fit(coordinates_array)
    cluster_labels = kmeans.labels_
    #data['cluster'] = cluster_labels
    tab_ret = []
    for i in range(len(cluster_labels)):
       tab_ret.append(cluster_labels[i]) 
    return tab_ret



result = kmeans_fct()


#res = {
#    "cluster": int(result)
#}

#json_object = json.dumps(res, indent=4)

#with open("pred_kmean.json", "w") as outfile:
#    outfile.write(json_object)

print(result)
#print("2")