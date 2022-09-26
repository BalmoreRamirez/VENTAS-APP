const { handleHttpError } = require("../utils/handleError");
const { CategoryModel } = require("../models");

const getCategoria = async (req, res) => {
    try {
        const { id } = req.params
        const data = await CategoryModel.findByPk(id)
        res.send({ data })
    } catch (e) {
        handleHttpError(res, "ERROR_GET_Categoria",);
    }
};

const getCategorias = async (req, res) => {
    try {

        const data = await CategoryModel.findAll()
        res.json({ data })
    } catch (e) {
        handleHttpError(res, "ERROR_GET_Categorias")
        console.log(e);
    }
};

const createCategoria = async (req, res) => {
    try {
        const { body } = req
        const categoria = new CategoryModel(body)
        await categoria.save()
        res.send({ categoria })
    } catch (e) {
        handleHttpError(res, "ERROR_POST_ITEMS")
    }
};

const updateCategoria = async (req, res) => {
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

const deleteCategoria = async (req, res) => {

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
    getCategoria,
    getCategorias,
    createCategoria,
    deleteCategoria,
    updateCategoria
};