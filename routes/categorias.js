const express = require("express");
const router = express.Router();

const {
    getCategorias,
    getCategoria,
    createCategoria,
    deleteCategoria,
    updateCategoria
} = require("../controllers/categorias");

router.get("/", getCategorias)
router.post("/", createCategoria)

router.get("/:id", getCategoria)
router.delete("/:id", deleteCategoria)
router.put("/:id", updateCategoria)


module.exports = router;
