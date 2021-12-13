#!/bin/bash

sudo apt update
sudo apt install curl -y



echo " ==== Installing NGINX ===="
# Install and configure web service
sudo apt install nginx -y

sed -i -E 's+root /var/www/html;+root /home/ubuntu/kumu/kumu-web-client/dist;+g' /etc/nginx/sites-enabled/default
sudo service nginx restart


# Install nvm
echo " ==== Installing NVM ===="
cd /var/www/html
curl -sL https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh -o install_nvm.s
bash install_nvm.sh

echo " ==== Installing NodeJS ===="
nvm install 12.20.2

echo " ==== Cloning project ===="
git clone https://github.com/kumcp/kumu.git
cd ./kumu/kumu-web-client
npm install

echo " ==== Building project ===="
# Build
export NODE_ENV=prod
npm run build