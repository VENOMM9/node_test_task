const { Sequelize } = require('sequelize');
const { Umzug, SequelizeStorage } = require('umzug');
const dotenv = require('dotenv');

dotenv.config();

const config = {
  development: {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD, // Hardcoded password here, should be fetched from environment variables
    database: process.env.DB_NAME,
    port: process.env.PORT,
   
  },
  // Other environments (e.g., test, production)...
};

const sequelize = new Sequelize(config.development);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

const umzug = new Umzug({
  migrations: { glob: 'migrations/*.js' },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});

module.exports = { sequelize, umzug, testConnection };
