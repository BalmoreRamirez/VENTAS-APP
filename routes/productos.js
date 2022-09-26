const express = require("express");
const router = express.Router();

const {
    getProductos,
    createProducto,
    getProducto,
    deleteProducto,
    updateProducto
} = require("../controllers/productos");

router.get("/", getProductos)
router.post("/", createProducto)

router.get("/:id", getProducto)
router.delete("/:id", deleteProducto)
router.put("/:id", updateProducto)


module.exports = router;
