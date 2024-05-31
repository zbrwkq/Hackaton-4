from flask import Flask, jsonify , request
from flask_cors import CORS
from sqlalchemy import create_engine, text
from dotenv import load_dotenv
import os

load_dotenv()  # Charger les variables d'environnement Ã  partir du fichier .env

app = Flask(__name__)
CORS(app)

# Configuration de la chaÃ®ne de connexion Ã  partir des variables d'environnement
db_url = os.getenv('DATABASE_URL')
engine = create_engine(db_url)

@app.route('/')
def index():
    with engine.connect() as connection:
        result = connection.execute(text('SELECT * FROM Medal LIMIT 1000'))  # Limiter les rÃ©sultats
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
        # RÃ©cupÃ©rer les paramÃ¨tres de pagination
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
        # RÃ©cupÃ©rer les paramÃ¨tres de pagination
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
    




if __name__ == '__main__':
    app.run(debug=True)
