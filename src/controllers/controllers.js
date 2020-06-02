import mongoose from 'mongoose';
import { ProductSchema } from '../models/models';

const Product = mongoose.model('Product', productSchema);

export const addnewProduct = (req, res) => {
  const newProduct = new Product(res.body);

  newProduct.save((err, Product) => {
    if (err) {
      return res.send(err);
    }

    return res.json(Product);
  });
}

