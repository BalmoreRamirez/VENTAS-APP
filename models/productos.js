const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/conecction')


const Producto = sequelize.define(
    'Productos',
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id_categoria: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        precio: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        estado: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        id_proveedor: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        }

    },
    {
        timestamps: true
    }
)


module.exports = Producto