import chalk from "chalk";
import { PalmettoEnergyClient } from "./_generated/palmetto-energy-api";
import { getAuthorizationHandler } from "./getAuthorizationHandler";
import { PalmettoEnvironmentTarget, PalmettoService, getEnvironment } from "./getEnvironment";


export async function runPalmettoEnergyExamples() {
    console.log(chalk.green('###############################'));
    console.log(chalk.green('## Palmetto Energy Examples ##'));
    console.log(chalk.green('###############################\n\n'));
    const environment = getEnvironment(PalmettoEnvironmentTarget.NEXT, PalmettoService.ENERGY)
    const authHandler = getAuthorizationHandler(environment);

    try {
        const palmettoEnergyClient = new PalmettoEnergyClient({
            BASE: environment.base_url,
            TOKEN: authHandler,
        });

        console.log(chalk.italic.green('>>> Find service areas'));
        const serviceAreas = await palmettoEnergyClient.serviceAreas.serviceAreasControllerFindOne({ lat: 32.784618, lon: -79.940918, postalCode: '29401' });
        console.log(`Found service area "${serviceAreas.name}" with ${serviceAreas.supportedUtilities.length} supported utilities`);
        console.log(chalk.italic.green('<<<\n'));

        console.log(chalk.italic.green('>>> Find all projects'));
        const projects = await palmettoEnergyClient.projects.projectsControllerFindAllPaged({});
        console.log(`Found ${projects.paging.totalRecords} projects`);
        console.log(chalk.italic.green('<<<\n'));


    } catch (e) {
        console.error(e);
    }


    console.log('\n\n');
}
