type ParsedCommand = Record<string, string[]>

export class CommandParser {
  static parse(cliArguments: string[]): ParsedCommand {
    const parsedCommand: ParsedCommand = {};
    let currentCommand: any;

    for (const argument of cliArguments) {
      if (argument.startsWith('--')) {

        parsedCommand[argument] = [];
        currentCommand = argument;

      } else if (currentCommand && argument) {
        parsedCommand[currentCommand].push(argument);
      }
    }
    console.log(parsedCommand);
    
    return parsedCommand;
  }
}