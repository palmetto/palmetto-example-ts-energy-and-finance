
export interface Environment {
  base_url: string;
  auth_url: string;
  service: PalmettoService;
  target: PalmettoEnvironmentTarget;
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
      },
      [PalmettoService.FINANCE]: {
        base_url: 'https://palmetto.finance',
        auth_url: 'https://palmetto.finance/api/auth/login'
      }
    },
    next: {
      [PalmettoService.ENERGY]: {
        base_url: 'https://next.palmetto.energy',
        auth_url: 'https://api-next.palmetto.com/api/v1/auth/login',
      },
      [PalmettoService.FINANCE]: {
        base_url: 'https://next.palmetto.finance',
        auth_url: 'https://next.palmetto.finance/api/auth/login'
      }
    }
  };

  return {
    ...environments[target][service],
    service,
    target
  };
}
