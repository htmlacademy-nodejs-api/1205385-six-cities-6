type ParsedCommand = Record<string, string[]>

export class CommandParser {
  static parse(cliArguments: string[]): ParsedCommand {
    const parsedCommand: ParsedCommand = {};
    let currentCommand: any;

    for (const argument of cliArguments) {
      if (argument.startsWith('--')) {
        console.log('1');

        parsedCommand[argument] = [];
        currentCommand = argument;
        console.log('1', parsedCommand, argument);

      } else if (currentCommand && argument) {
        parsedCommand[currentCommand].push(argument);
        console.log('2', parsedCommand);
      }
    }
    console.log(parsedCommand);
    
    return parsedCommand;
  }
}
