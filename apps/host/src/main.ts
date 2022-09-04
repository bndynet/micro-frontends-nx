import { setRemoteDefinitions } from '@nrwl/angular/mf';
import { environment } from './environments/environment';
import { EnvName } from './environments/types';

const manifest =
  environment.name === EnvName.development
    ? '/assets/module-federation.manifest.json'
    : `/assets/module-federation.${environment.name}.manifest.json`;

fetch(manifest)
  .then((res) => res.json())
  .then((definitions) => setRemoteDefinitions(definitions))
  .then(() => import('./bootstrap').catch((err) => console.error(err)));
