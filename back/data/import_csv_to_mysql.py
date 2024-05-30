import pandas as pd
import mysql.connector
from mysql.connector import Error

def create_connection(host_name, user_name, user_password, db_name):
    connection = None
    try:
        connection = mysql.connector.connect(
            host=host_name,
            user=user_name,
            passwd=user_password,
            database=db_name
        )
        print("Connection to MySQL DB successful")
    except Error as e:
        print(f"The error '{e}' occurred")
    return connection

def execute_query(connection, query):
    cursor = connection.cursor()
    try:
        cursor.execute(query)
        connection.commit()
        print("Query executed successfully")
    except Error as e:
        print(f"The error '{e}' occurred")

def insert_data_from_dataframe(connection, df, table_name):
    cursor = connection.cursor()
    columns = ", ".join(df.columns)
    placeholders = ", ".join(["%s"] * len(df.columns))
    insert_query = f'INSERT INTO {table_name} ({columns}) VALUES ({placeholders})'
    
    for index, row in df.iterrows():
        values = tuple(row)
        try:
            cursor.execute(insert_query, values)
        except Error as e:
            print(f"The error '{e}' occurred: {insert_query} with values {values}")
    connection.commit()
    cursor.close()
    print("Data inserted successfully")

def import_csv_to_mysql(csv_file_path, table_name):
    print(f"Reading CSV file from {csv_file_path}")
    df = pd.read_csv(csv_file_path)
    print(f"CSV file read successfully. Columns: {df.columns.tolist()}")

    host_name = "mysql-hackathonipssi.alwaysdata.net"
    user_name = "360556_root"
    user_password = "hackathonipssi*"
    db_name = "hackathonipssi_mia4"
    
    connection = create_connection(host_name, user_name, user_password, db_name)
    
    create_table_query = f"""
    CREATE TABLE IF NOT EXISTS {table_name} (
        Country_Economy VARCHAR(255),
        GDP_2020_billions_of_Dollars_Int_Dollars_Nominal FLOAT,
        GDP_2020_billions_of_Dollars_Int_Dollars_Rank1 INT,
        GDP_2020_billions_of_Dollars_Int_Dollars_PPP FLOAT,
        GDP_2020_billions_of_Dollars_Int_Dollars_Rank2 INT,
        GDP_per_capita_2020_Dollars_Int_Dollars_Nominal VARCHAR(255),
        GDP_per_capita_2020_Dollars_Int_Dollars_Rank3 INT,
        GDP_per_capita_2020_Dollars_Int_Dollars_PPP VARCHAR(255),
        GDP_per_capita_2020_Dollars_Int_Dollars_Rank4 INT,
        GDP_Growth_Percentage_2020 FLOAT,
        GDP_Growth_Percentage_Rank5 INT
    );
    """
    
    print(f"Executing query: {create_table_query}")
    execute_query(connection, create_table_query)
    
    print(f"Inserting data into table: {table_name}")
    insert_data_from_dataframe(connection, df, table_name)
    
    connection.close()
    print("Connection closed")
