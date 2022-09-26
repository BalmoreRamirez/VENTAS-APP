const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/conecction')


const Category = sequelize.define(
    'Categorias',
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: true
    }
)


module.exports = Category