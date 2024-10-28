import { Request, Response } from 'express';

export const getProductsList = async (req: Request, res: Response) => {
  res.send('List of products');
}

export const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log('id:', id);
  res.send(`Product with id ${id}`);
}

export const createProduct = async (req: Request, res: Response) => {
  const newProduct = req.body;
  // Here you would typically add the new product to your database
  res.status(201).send(`Product created: ${JSON.stringify(newProduct)}`);
  res.send('Product created');
}

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedProduct = req.body;
  // Here you would typically update the product in your database
  res.send(`Product with id ${id} updated: ${JSON.stringify(updatedProduct)}`);
}

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  // Here you would typically delete the product from your database
  res.send(`Product with id ${id} deleted`);
}