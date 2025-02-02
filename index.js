const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

require('dotenv').config();
const app = express();

connectDB();
app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/products', require('./routes/productRoutes'));

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
