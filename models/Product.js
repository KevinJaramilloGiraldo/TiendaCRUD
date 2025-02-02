const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  precio: Number,
  categoria: String,
  cantidad: Number
});

module.exports = mongoose.model('Product', ProductSchema);