const express = require('express');
const { getProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', auth, getProducts);
router.post('/', auth, createProduct);
router.put('/:id', auth, updateProduct);  
router.delete('/:id', auth, deleteProduct);

module.exports = router;