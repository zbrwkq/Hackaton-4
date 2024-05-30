from flask import Flask, jsonify
from flask_cors import CORS
from sqlalchemy import create_engine, text
from dotenv import load_dotenv
import os

load_dotenv()  # Charger les variables d'environnement à partir du fichier .env

app = Flask(__name__)
CORS(app)

# Configuration de la chaîne de connexion à partir des variables d'environnement
db_url = os.getenv('DATABASE_URL')
engine = create_engine(db_url)

@app.route('/')
def index():
    with engine.connect() as connection:
        result = connection.execute(text('SELECT * FROM Athlete LIMIT 1000'))  # Limiter les résultats
        rows = [dict(row) for row in result.mappings()]
    return jsonify(rows)

@app.route('/medalsCountry')
def dataResult():
    with engine.connect() as connection:
        result = connection.execute(text('SELECT * FROM Country_historical_medals'))  # Limiter les résultats
        rows = [dict(row) for row in result.mappings()]
    return jsonify(rows)

if __name__ == '__main__':
    app.run(debug=True)