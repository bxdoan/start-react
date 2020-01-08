# Install nvm:
Download the nvm install script via cURL:
```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash

nvm -v
```

# Install node using nvm:
```bash
nvm install node

nvm use node

nvm install --lts

nvm use --lts
```

# Create reactjs app
```bash
npx create-react-app start-react
cd start-react
npm start
```

# Deploy

The build folder is ready to be deployed.
You may serve it with a static server:
```bash
npm install -g serve
serve -s build
```
Find out more about deployment here: bit.ly/CRA-deploy
