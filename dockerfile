# Utilisez l'image node:14 comme base
FROM node:slim

# Définissez le répertoire de travail dans le conteneur
WORKDIR /

# Copiez le fichier package.json et package-lock.json
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste du code source de l'application
COPY . .

# Exposez le port 3000 utilisé n
EXPOSE 3000

CMD ["npm", "test"]


