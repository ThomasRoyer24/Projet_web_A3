from joblib import dump, load
import sys
import ast
import json
import os

current_path = os.path.dirname(__file__)

def pred_hl(classification, accident):
    if classification == "SVM":
        clf = load(f'{current_path}/SVM.joblib')
        return clf.predict(ast.literal_eval(accident))
    if classification == "RF":
        clf = load(f'{current_path}/random_forest.joblib')
        return clf.predict(ast.literal_eval(accident))
    if classification == "MLP":
        clf = load(f'{current_path}/MLP.joblib')
        return clf.predict(ast.literal_eval(accident))
    return (None)

grav = pred_hl(sys.argv[1], sys.argv[2])

res = {
    "gravite": grav[0]
}

print(res)


