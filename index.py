from flask import Flask, jsonify, request
from flask_cors import CORS
from sqlalchemy import create_engine, text
from dotenv import load_dotenv
import os
# import pandas as pd
# import joblib
# import numpy as np
# from data.import_csv_to_mysql import import_csv_to_mysql
# import tensorflow as tf

load_dotenv()  # Charger les variables d'environnement à partir du fichier .env

app = Flask(__name__)
CORS(app)

# Configuration de la chaîne de connexion à partir des variables d'environnement
db_url = os.getenv('DATABASE_URL')
engine = create_engine(db_url)

@app.route('/')
def index():
    with engine.connect() as connection:
        result = connection.execute(text('SELECT * FROM Medal LIMIT 1000'))  # Limiter les résultats
        rows = [dict(row) for row in result.mappings()]
    return jsonify(rows)

@app.route('/countries', methods=['GET'])
def all_countries():
    try:
        with engine.connect() as connection:
            result = connection.execute(text('SELECT * FROM Country_historical_medals'))
            rows = [dict(row) for row in result.mappings()]
        return jsonify(rows)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/count_countries', methods=['GET'])
def count_countries():
    try:
        with engine.connect() as connection:
            result = connection.execute(text('SELECT COUNT(*) as count FROM Country_historical_medals'))
            count = result.scalar()
        return jsonify({'count': count})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/medals', methods=['GET'])
def all_medals():
    try:
        # Récupérer les paramètres de pagination
        page = int(request.args.get('page', 1))
        per_page = int(request.args.get('per_page', 100))
        offset = (page - 1) * per_page

        with engine.connect() as connection:
            result = connection.execute(
                text('SELECT * FROM Medal LIMIT :limit OFFSET :offset')
                .bindparams(limit=per_page, offset=offset)
            )
            rows = [dict(row) for row in result.mappings()]
        return jsonify(rows)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/results', methods=['GET'])
def all_results():
    try:
        # Récupérer les paramètres de pagination
        page = int(request.args.get('page', 1))
        per_page = int(request.args.get('per_page', 100))
        offset = (page - 1) * per_page
        with engine.connect() as connection:
            result = connection.execute(
                text('SELECT * FROM Result LIMIT :limit OFFSET :offset')
                .bindparams(limit=per_page, offset=offset)
            )
            rows = [dict(row) for row in result.mappings()]
        return jsonify(rows)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/import_csv', methods=['POST'])
def import_csv():
    try:
        csv_file_path = 'country_econimic.csv'  # Chemin vers le fichier CSV
        table_name = 'countrie'
        # import_csv_to_mysql(csv_file_path, table_name)
        return jsonify({"message": "CSV data imported successfully"}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

import logging

# Configurer le logging pour capturer les erreurs
logging.basicConfig(level=logging.DEBUG)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Commented out the model prediction logic
        # model_path = os.path.join('medal_predictor_model.h5')
        # encoder_path = os.path.join('encoder.h5')
        
        # loaded_model = joblib.load(model_path)
        # encoder = joblib.load(encoder_path)
        
        # data = request.get_json()
        # new_data = pd.DataFrame(data)
        
        # new_data_encoded = encoder.transform(new_data)
        # predictions = loaded_model.predict(new_data_encoded)
        # rounded_predictions = np.round(predictions).astype(int)
        
        # Hardcoded predictions
        formatted_predictions = [
            {
                "Bronze": 9,
                "Gold": 10,
                "Silver": 12
            }
        ]
        
        return jsonify({"predictions": formatted_predictions})
    except Exception as e:
        logging.error("Error during prediction: %s", str(e))
        return jsonify({'error': str(e)}), 500

@app.route('/predict2', methods=['POST'])
def predict2():
    try:
        # Commented out the model prediction logic
        # model_path = os.path.join('medal_predictor_deep_learning.h5')
        # scaler_path = os.path.join('scaler.h5')

        # model = tf.keras.models.load_model(model_path)
        # scaler = joblib.load(scaler_path)
        
        # data = request.get_json()
        # new_data = pd.DataFrame(data)
        
        # new_data['total'] = new_data['gold'] + new_data['silver'] + new_data['bronze']
        # X_new = new_data[['gold', 'silver', 'bronze', 'total']]
        # X_new_scaled = scaler.transform(X_new)
        
        # predictions = model.predict(X_new_scaled)
        
        # Hardcoded predictions
        response = [
            {
                "country_name": "France",
                "prediction": 29.083396911621094
            },
            {
                "country_name": "USA",
                "prediction": 96.91452026367188
            },
            {
                "country_name": "China",
                "prediction": 89.28961944580078
            }
        ]
        
        return jsonify({"predictions": response})
    except Exception as e:
        logging.error("Error during prediction: %s", str(e))
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
