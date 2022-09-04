import { environment as devEnvironment } from './environment.dev';
import { Environment, EnvName } from './types';

export const environment: Environment = {
  ...devEnvironment,
  name: EnvName.production,
  production: true,
};
