const fs = require('fs-extra');
const project = require('../apps/host/project.json');
const config = require('./config.json');

const distPath = './dist';
const appsPath = `${distPath}/apps`;
const hostPath = `${appsPath}/host`;

// move remotes to sub folder
const apps = project.implicitDependencies;
if (apps) {
  const hostRemotesPath = `${hostPath}/remotes`;
  const maxNameLength = apps.map(app => app.length).sort((a, b) => a > b)[0];

  fs.mkdirSync(hostRemotesPath);
  apps.forEach((app) => {
    console.log(`Moving app ${app.padEnd(maxNameLength, ' ')} to ${hostRemotesPath}...`);
    fs.moveSync(`${appsPath}/${app}`, `${hostRemotesPath}/${app}`);
  });
}

// move build info file to host folder
fs.moveSync(`${distPath}/${config.buildInfoFile}`, `${hostPath}/${config.buildInfoFile}`);
