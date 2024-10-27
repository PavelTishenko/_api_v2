import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('List of products');
})

router.get('/:id', (req, res) => {
  const productId = req.params.id;
  console.log('productId:', productId)
  res.send(`Product ID: ${productId}`);
});

router.post('/', (req, res) => {
  const newProduct = req.body;
  // Here you would typically add the new product to your database
  res.status(201).send(`Product created: ${JSON.stringify(newProduct)}`);
});

export default router;