import express from 'express';
import productsRouter from './routes/products';

const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Node!');
});

app.use('/products', productsRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});