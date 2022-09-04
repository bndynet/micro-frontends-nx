export enum EnvName {
  development = 'dev',
  production = 'prod',
}

export interface Environment {
  name: EnvName;
  production?: boolean;
}

export const environment: Environment = {
  name: EnvName.development,
  production: false,
};
