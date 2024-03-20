### Вспомогательные команды.  

Пример: cli.js --<command> [--arguments]
```
npm run ts ./src/main.cli.ts -- --version
npm run ts ./src/main.cli.ts -- --help 
npm run ts ./src/main.cli.ts -- --import  mocks/test_generate.tsv
npm run ts ./src/main.cli.ts -- --generate 100 mocks/test_generate.tsv http://localhost:3123/api
```

Команды:
```
 --version:                   # выводит номер версии
 --help:                      # печатает этот текст
 --import <path>:             # импортирует данные из TSV
 --generate <n> <path> <url>  # генерирует произвольное количество тестовых данных
 ```

Рвбота с базой локально через консоль:
```
docker exec -it <six-cities_mongodb> mongo -u <admin> - обращение к базе данных
show collections - показать коллекции в базе
db.createCollection('<name>') - создать коллекцию
db.<name>.insertMany([{...datas}, {...datas}]) - создать данные 
db.<name>.find() получить коллекцию 
db.<name>.find({ _id: ObjectId('string id') }) - получить конкретного пользователя
```
Импорт файла в базу данных:
```
 npm run ts ./src/main.cli.ts -- --import  mocks/offers_test.tsv admin test localhost six-cities secret
```
```
 docker compose \                 
--file ./docker-compose.dev.yml \
--env-file ./.env \
--project-name "six-cities" \
up \
-d
```
