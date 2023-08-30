
import { Environment, PalmettoService } from "./getEnvironment";

export function getAuthorizationHandler(environment: Environment) {
  const getToken = async () => {
    const response = await fetch(`${environment.auth_url}`, {
      method: 'POST',
      body: JSON.stringify({
        username: environment.username,
        password: environment.password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    const accessToken = await response.json();
 
    return environment.service === PalmettoService.ENERGY ? accessToken : accessToken.access_token;
  };

  return getToken;
}
