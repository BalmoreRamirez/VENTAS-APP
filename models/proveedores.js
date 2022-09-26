const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/conecction')

const Proveedor = sequelize.define(
    'Proveedores',
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        timestamps: true
    }
)


module.exports = Proveedor