const { handleHttpError } = require("../utils/handleError");
const {ProveedorModel } = require("../models");

const getProveedor = async (req, res) => {
    try {
        const { id } = req.params
        const data = await CategoryModel.findByPk(id)
        res.send({ data })
    } catch (e) {
        handleHttpError(res, "ERROR_GET_Categoria",);
    }
};

const getProveedores = async (req, res) => {
    try {

        const data = await ProveedorModel.findAll()
        res.json({ data })
    } catch (e) {
        handleHttpError(res, "ERROR_GET_Categorias")
        console.log(e);
    }
};

const createProveedor = async (req, res) => {
    try {
        const { body } = req
        const categoria = new CategoryModel(body)
        await categoria.save()
        res.send({ categoria })
    } catch (e) {
        handleHttpError(res, "ERROR_POST_ITEMS")
    }
};

const updateProveedor = async (req, res) => {
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

const deleteProveedor = async (req, res) => {

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
    getProveedor,
    getProveedores,
    createProveedor,
    deleteProveedor,
    updateProveedor
};