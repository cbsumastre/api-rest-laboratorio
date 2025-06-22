#!/bin/bash
npm install -g npm@11.3.0

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

wget -qO- https://get.pnpm.io/install.sh | ENV="/home/vscode/.bashrc" SHELL="$(which bash)" bash -

curl -fsSL https://bun.sh/install | bash

source /home/vscode/.nvm/nvm.sh

nvm install 22

npm install -g yarn

