import { Router } from 'express';

import { getProductsList, getProductById, createProduct, updateProduct, deleteProduct } from './productsController';

const router = Router();

router.get('/', getProductsList)
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;