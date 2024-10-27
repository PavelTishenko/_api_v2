import express from 'express';
import productsRouter from './routes/products';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Node!');
});

app.use('/products', productsRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});