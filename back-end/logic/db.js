const knex = require("knex");

// Объект конфигурации для подключения к PostgreSQL
const dataBaseConfig = {
  client: "pg",
  connection: {
    host: 'localhost', // Хост базы данных
    port: 5432, // Порт базы данных
    database: 'postgres', // Название базы данных
    user: 'postgres', // Имя пользователя базы данных
    password: '421421', // Пароль пользователя базы данных
  },
};

// Создание новый экземпляр knex с конфигурацией
const dataBase = knex(dataBaseConfig);

module.exports = { dataBase };