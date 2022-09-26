const express = require("express");
const router = express.Router();

const {
    getProveedor,
    deleteProveedor,
    updateProveedor,
    createProveedor,
    getProveedores
} = require("../controllers/proveedores");

router.get("/", getProveedores)
router.post("/", createProveedor)

router.get("/:id", getProveedor)
router.delete("/:id", deleteProveedor)
router.put("/:id", updateProveedor)


module.exports = router;
