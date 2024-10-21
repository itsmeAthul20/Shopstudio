import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  description: { type: String, required: true },
});

const Product = mongoose.model('Product', productSchema);

const cartSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true, default: 1 },
});

const Cart = mongoose.model('Cart', cartSchema);


app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/products', async (req, res) => {
  const { name, price, imageUrl, description } = req.body;
  const newProduct = new Product({ name, price, imageUrl, description });
  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.put('/api/products/:id', async (req, res) => {
  const { name, price, imageUrl, description } = req.body;
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, imageUrl, description },
      { new: true, runValidators: true }
    );
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.delete('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.get('/api/cart', async (req, res) => {
  try {
    const cartItems = await Cart.find().populate('productId'); 
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.post('/api/cart', async (req, res) => {
  const { productId, quantity } = req.body;

  const existingCartItem = await Cart.findOne({ productId });

  if (existingCartItem) {
    existingCartItem.quantity += quantity;
    await existingCartItem.save();
    return res.status(200).json(existingCartItem);
  }

  const newCartItem = new Cart({ productId, quantity });
  try {
    const savedCartItem = await newCartItem.save();
    res.status(201).json(savedCartItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.delete('/api/cart/:id', async (req, res) => {
  try {
    const cartItem = await Cart.findByIdAndDelete(req.params.id);
    if (!cartItem) return res.status(404).json({ message: 'Cart item not found' });
    res.json({ message: 'Cart item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
