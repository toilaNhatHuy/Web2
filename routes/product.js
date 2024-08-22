const productController = require("../controllers/productController");

const router = require("express").Router();
router.post("/", productController.addProduct);
module.exports = router;