import React from 'react';
import Card from '../Card/Card';
import { IProductProps } from './Product.props';
import styles from './Product.module.css';
import Rating from '../Rating/Rating';
import Tag from '../Tag/Tag';
import Button from '../Button/Button';

const Product: React.FC<IProductProps> = ({ product, className, ...props }) => {
  return (
    <Card className={styles.product}>
      <div className={styles.logo}>
        <img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} />
      </div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.price}>{product.price}</div>
      <div className={styles.credit}>{product.credit}</div>
      <div className={styles.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRating} />
      </div>
      <div className={styles.tags}>
        {product.categories.map(category => (
          <Tag color='ghost' key={category}>
            {category}
          </Tag>
        ))}
      </div>
      <div className={styles.priceTitle}>Price</div>
      <div className={styles.creditTittle}>Credit</div>
      <div className={styles.rateTitle}>{product.reviewCount} reviews</div>
      <hr className={styles.hr}/>
      <div className={styles.description}>{product.description}</div>
      <div className={styles.feature}>Feature</div>
      <div className={styles.advBlock}>
        <div className={styles.advantages}>
          <div>Benefits</div>
          <div>{product.advantages}</div>
        </div>
        <div className={styles.disadvantages}>
          <div>limitations</div>
          <div>{product.disadvantages}</div>
        </div>
      </div>
      <hr className={styles.hr}/>
      <div className={styles.actions}>
        <Button appearance='primary'>
          learn more
        </Button>
        <Button appearance='ghost' arrow={'right'}>
          read reviews
        </Button>
      </div>
    </Card>
  );
};

export default Product;