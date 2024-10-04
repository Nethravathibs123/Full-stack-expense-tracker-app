const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'expense-tracker-app', // Database name
    'root', // Username
    'Nethra@1', // Password
    {
        dialect: 'mysql',
        host: 'localhost'
    }
);

module.exports = sequelize;