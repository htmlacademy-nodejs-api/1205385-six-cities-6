### Программа для подготовки данных для REST API сервера.  

Пример: cli.js --<command> [--arguments]
```
npm run ts ./src/main.cli.ts -- --version
npm run ts ./src/main.cli.ts -- --help 
npm run ts ./src/main.cli.ts -- --import  src/mocks/test_generate.tsv
npm run ts ./src/main.cli.ts -- --generate 100 src/mocks/test_generate.tsv http://localhost:3123/api
```
Команды:
```
 --version:                   # выводит номер версии
 --help:                      # печатает этот текст
 --import <path>:             # импортирует данные из TSV
 --generate <n> <path> <url>  # генерирует произвольное количество тестовых данных
 ```
