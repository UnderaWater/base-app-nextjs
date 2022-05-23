import React from 'react';
import { IProductProps } from './Product.props';

const Product: React.FC<IProductProps> = ({ product, className, ...props }) => {
  return (
    <div>
        {product.title}
    </div>
  );
};

export default Product;