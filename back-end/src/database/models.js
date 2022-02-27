const Sequelize = require('sequelize');
const database = require('./db');
 
const Category = database.define('categories', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const Device = database.define('devices', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'categories',
            key: 'id'
        }
    },
    color: {
        type: Sequelize.STRING,
        allowNull: false
    },
    partNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Category.hasMany(Device);
Device.belongsTo(Category);

module.exports = { Category, Device };
