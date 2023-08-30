
import { Environment, PalmettoService } from "./getEnvironment";

export function getAuthorizationHandler(environment: Environment) {
  const getToken = async () => {
    const response = await fetch(`${environment.auth_url}`, {
      method: 'POST',
      body: JSON.stringify({
        username: process.env.PALMETTO_ACCOUNT_EMAIL,
        password: process.env.PALMETTO_ACCOUNT_PASSWORD,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    const accessToken = await response.json();
 
    return environment.service === PalmettoService.ENERGY ? accessToken : accessToken.access_token;
  };

  return getToken;
}
