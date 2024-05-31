from flask import Flask, jsonify
from flask_cors import CORS
from sqlalchemy import create_engine, text
from dotenv import load_dotenv
import os
import logging

load_dotenv()  # Load environment variables from .env

app = Flask(__name__)
CORS(app)

# Configure logging
logging.basicConfig(level=logging.DEBUG)

# Configuration of the connection string from environment variables
db_url = os.getenv('DATABASE_URL')
if not db_url:
    logging.error("DATABASE_URL environment variable is not set.")
else:
    logging.info(f"DATABASE_URL: {db_url}")

engine = create_engine(db_url)

@app.route('/')
def index():
    try:
        with engine.connect() as connection:
            result = connection.execute(text('SELECT 1'))
            return jsonify({"message": "Database connection successful", "result": [dict(row) for row in result]})
    except Exception as e:
        logging.error(f"Error connecting to database: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
