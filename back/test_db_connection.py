from sqlalchemy import create_engine, text
import logging

# Configure logging
logging.basicConfig(level=logging.DEBUG)

# Database URL (replace with your actual database URL)
db_url = 'mysql+pymysql://360556_root:hackathonipssi*@mysql-db:3306/hackathonipssi_mia4'

# Create an SQLAlchemy engine
engine = create_engine(db_url)

try:
    with engine.connect() as connection:
        # Execute a simple query to test the connection
        result = connection.execute(text('SELECT 1'))
        logging.info("Connection successful: %s", result.fetchone())
except Exception as e:
    logging.error("Error connecting to database: %s", e)
