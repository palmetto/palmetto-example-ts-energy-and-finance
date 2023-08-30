
import chalk from "chalk";
import { PalmettoFinanceClient } from "./_generated/palmetto-finance-api";
import { getAuthorizationHandler } from "./getAuthorizationHandler";
import { PalmettoEnvironmentTarget, PalmettoService, getEnvironment } from "./getEnvironment";


export async function runPalmettoFinanceExamples() {

    console.log(chalk.cyan('###############################'));
    console.log(chalk.cyan('## Palmetto Finance Examples ##'));
    console.log(chalk.cyan('###############################\n\n'));
    const environment = getEnvironment(PalmettoEnvironmentTarget.NEXT, PalmettoService.FINANCE)
    const authHandler = getAuthorizationHandler(environment);

    try {
        const palmettoFinanceClient = new PalmettoFinanceClient({
            BASE: environment.base_url,
            TOKEN: authHandler,
        });

        console.log(chalk.italic.cyan('>>> Find all accounts'));
        const projects = await palmettoFinanceClient.accounts.getApiAccounts();
        console.log(`Found ${projects.length} accounts`);
        console.log(chalk.italic.cyan('<<<\n'));


        console.log(chalk.italic.cyan('>>> Find all disclosures'));
        const disclosures = await palmettoFinanceClient.disclosures.getApiDisclosures({});
        console.log(`Found ${disclosures.length} disclosures`);
        console.log(chalk.italic.cyan('<<<\n'));

    } catch (e) {
        console.error(e);
    }

}
