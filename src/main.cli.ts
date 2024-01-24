import { ImportCommand } from './cli/commands/import.command.js';
import { CLIApplication, HelpCommand, VersionCommand } from './cli/index.js';

function bootstrap() {
  const cliApplication = new CLIApplication();
  cliApplication.registerCommands([
    new HelpCommand(),
    new VersionCommand(),
    new ImportCommand(),
  ]);
  console.log(process.argv);
  
  cliApplication.processCommand(process.argv);
}

bootstrap();
