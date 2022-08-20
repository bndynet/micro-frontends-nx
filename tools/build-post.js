const fs = require('fs-extra');
const project = require('../apps/host/project.json');

const appsRoot = './dist/apps/';
const apps = project.implicitDependencies;

fs.mkdirSync(`${appsRoot}/host/apps`);
apps.forEach((app) => {
  console.log(`Moving ${app}...`);
  fs.moveSync(`${appsRoot}/${app}`, `${appsRoot}/host/apps/${app}`);
});
