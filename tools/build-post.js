const fs = require('fs-extra');
const project = require('../apps/host/project.json');

const appsRoot = './dist/apps/';
const apps = project.implicitDependencies;
const remotesFolder = `${appsRoot}/host/remotes`;
fs.mkdirSync(remotesFolder);
const maxNameLength = apps.map(app => app.length).sort((a, b) => a > b)[0];
apps.forEach((app) => {
  console.log(`Moving app ${app.padEnd(maxNameLength, ' ')} to ${remotesFolder}...`);
  fs.moveSync(`${appsRoot}/${app}`, `${remotesFolder}/${app}`);
});
