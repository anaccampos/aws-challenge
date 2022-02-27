const Sequelize = require('sequelize');
// import { Category, Device } from '../database/models';

const connection = new Sequelize('challenge', 'root', 'Password@123',
    {
        dialect: 'mysql', host: 'localhost'
    }
);



/*** Connect Model ***/

// Category.init(connection);
// Device.init(connection);

/*** Associate Models ***/

// Device.associate(connection.models)

module.exports = connection;
