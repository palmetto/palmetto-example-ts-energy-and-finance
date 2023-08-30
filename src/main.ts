import 'dotenv/config'
import { runPalmettoEnergyExamples } from './runPalmettoEnergyExamples';
import { runPalmettoFinanceExamples } from './runPalmettoFinanceExamples';

(async () => {
  // Runs all the examples demonstrating palmetto energy apis
  await runPalmettoEnergyExamples();

  // Runs all the examples demonstrating palmetto finance apis
  await runPalmettoFinanceExamples();
})();