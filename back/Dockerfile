# Utiliser l'image de base Python
FROM python:3.8-slim

# Installer les dépendances système
RUN apt-get update && apt-get install -y \
    build-essential \
    default-libmysqlclient-dev \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Installer les dépendances Python
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copier les fichiers de l'application
COPY . /app
WORKDIR /app

# Exposer les ports nécessaires
EXPOSE 5000
EXPOSE 8888

# Commande par défaut pour démarrer Flask
CMD ["flask", "run", "--host=0.0.0.0"]
