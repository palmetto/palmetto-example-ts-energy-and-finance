
export interface Environment {
  base_url: string;
  auth_url: string;
  service: PalmettoService;
  target: PalmettoEnvironmentTarget;
  username: string;
  password: string;
}

export enum PalmettoEnvironmentTarget {
  NEXT = 'next',
  PROD = 'prod'
}

export enum PalmettoService {
  ENERGY = 'energy',
  FINANCE = 'finance'
}

export function getEnvironment(target: PalmettoEnvironmentTarget, service: PalmettoService): Environment {
  const environments = {
    prod: {
      [PalmettoService.ENERGY]: {
        base_url: 'https://palmetto.energy',
        auth_url: 'https://api.palmetto.com/api/v1/auth/login',
        username: process.env.PALMETTO_ENERGY_ACCOUNT_EMAIL,
        password: process.env.PALMETTO_ENERGY_ACCOUNT_PASSWORD
      },
      [PalmettoService.FINANCE]: {
        base_url: 'https://palmetto.finance',
        auth_url: 'https://palmetto.finance/api/auth/login',
        username: process.env.PALMETTO_FINANCE_ACCOUNT_EMAIL,
        password: process.env.PALMETTO_FINANCE_ACCOUNT_PASSWORD
      }
    },
    next: {
      [PalmettoService.ENERGY]: {
        base_url: 'https://next.palmetto.energy',
        auth_url: 'https://api-next.palmetto.com/api/v1/auth/login',
        username: process.env.PALMETTO_ENERGY_ACCOUNT_EMAIL,
        password: process.env.PALMETTO_ENERGY_ACCOUNT_PASSWORD
      },
      [PalmettoService.FINANCE]: {
        base_url: 'https://next.palmetto.finance',
        auth_url: 'https://next.palmetto.finance/api/auth/login',
        username: process.env.PALMETTO_FINANCE_ACCOUNT_EMAIL,
        password: process.env.PALMETTO_FINANCE_ACCOUNT_PASSWORD
      }
    }
  };

  return {
    ...environments[target][service],
    service,
    target
  };
}
