const Sequelize = require('sequelize');
const sequelize = new Sequelize('challenge', 'root', 'Password@123',
    {
        dialect: 'mysql', host: 'localhost'
    }
);

module.exports = sequelize;
