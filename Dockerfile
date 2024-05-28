#Utiliser une image de base avec Jupyter et PySpark
FROM jupyter/pyspark-notebook:spark-3.1.2

# Installer openjdk-11-jdk
USER root
RUN apt-get update && apt-get install -y openjdk-11-jdk && rm -rf /var/lib/apt/lists/*

# Installer findspark
RUN pip install findspark

# Définir les variables d'environnement
ENV SPARK_HOME=/usr/local/spark
ENV PATH=$SPARK_HOME/bin:$PATH

# Exposer le port 8888 pour Jupyter Notebook
EXPOSE 8888

# Démarrer Jupyter Notebook
CMD ["start-notebook.sh", "--NotebookApp.token=''"]

