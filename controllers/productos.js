const { handleHttpError } = require("../utils/handleError");
const { ProductoModel } = require("../models");

const getProducto = async (req, res) => {
    try {
        const { id } = req.params
        const data = await CategoryModel.findByPk(id)
        res.send({ data })
    } catch (e) {
        handleHttpError(res, "ERROR_GET_Categoria",);
    }
};

const getProductos = async (req, res) => {
    try {

        const data = await ProductoModel.findAll()
        res.json({ data })
    } catch (e) {
        handleHttpError(res, "ERROR_GET_Produc")
        console.log(e);
    }
};

const createProducto = async (req, res) => {
    try {
        const { body } = req
        const categoria = new CategoryModel(body)
        await categoria.save()
        res.send({ categoria })
    } catch (e) {
        handleHttpError(res, "ERROR_POST_ITEMS")
    }
};

const updateProducto = async (req, res) => {
    try {
        const { id } = req.params
        const { body } = req

        const categoria = await CategoryModel.findByPk(id)
        if (!categoria) {
            return res.status(404).json({
                msg: "error al actualizar"
            })
        }
        await categoria.update(body)
        res.json(categoria)
    } catch (e) {
        handleHttpError(res, "Error actualizar categoria")
    }
};

const deleteProducto = async (req, res) => {

    try {
        const { id } = req.params
        const categoria = await CategoryModel.findByPk(id)
        if (!categoria) {
            return res.status(404).json
                ({
                    msg: 'NO existe la categoria' + id
                })

        }
        await categoria.destroy()


        res.send(categoria)
    } catch (e) {
        handleHttpError(res, "ERROR_DELETE_ITEM");
    }

};

module.exports = {
    getProducto,
    getProductos,
    createProducto,
    deleteProducto,
    updateProducto
};