#!/bin/bash

export NODE_ENV=prod && npm run build

sudo apt update
sudo apt install curl -y

# Install nvm using NVM install
cd ~
curl -sL https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh -o install_nvm.s
bash install_nvm.sh

nvm install 12.20.2

git clone https://github.com/kumcp/kumu.git
cd ./kumu/kumu-web-client
npm install


sudo apt install nginx -y

sed -i -E 's+root /var/www/html;+root /home/ubuntu/kumu/kumu-web-client/dist;+g' /etc/nginx/sites-enabled/default
sudo service nginx restart