import React, { ForwardedRef, forwardRef, useRef, useState } from 'react';
import Card from '../Card/Card';
import { IProductProps } from './Product.props';
import styles from './Product.module.css';
import Rating from '../Rating/Rating';
import Tag from '../Tag/Tag';
import Button from '../Button/Button';
import Review from '../Review/Review';
import Divider from '../Divider/Divider';
import ReviewForm from '../ReviewForm/ReviewForm';
import { motion } from 'framer-motion';

const Product = motion(forwardRef(({ product, className, ...props }: IProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const [isRewievOpened, setIsRewievOpened] = useState<boolean>(false);
  const reviewRef = useRef<HTMLDivElement>(null);

  const variants = {
    visible: {
      opacity: 1,
      height: 'auto'
    },
    hidden: {
      opacity: 0,
      height: 0
    }
  };

  const scrollToReview = () => {
    setIsRewievOpened(true);
    reviewRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className={className} {...props} ref={ref}>
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
        <div className={styles.rateTitle}>
          <a href='#ref' onClick={scrollToReview}>{product.reviewCount} {product.reviewCount === 1 ? 'review' : 'reviews'}</a>
        </div>
        <hr className={styles.hr} />
        <div className={styles.description}>{product.description}</div>
        <div className={styles.feature}>
          {product.characteristics.map(c => (
            <div className={styles.characteristics} key={c.name}>
              <span className={styles.characteristicsName}>{c.name}</span>
              <span className={styles.characteristicsDots}></span>
              <span className={styles.characteristicsValue}>{c.value}</span>
            </div>
          ))}
        </div>
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
        <hr className={styles.hr} />
        <div className={styles.actions}>
          <Button appearance='primary'>
            learn more
          </Button>
          <Button
            appearance='ghost'
            arrow={isRewievOpened ? 'down' : 'right'}
            onClick={() => setIsRewievOpened(!isRewievOpened)}
          >
            read reviews
          </Button>
        </div>
      </Card>
      <motion.div animate={isRewievOpened ? 'visible' : 'hidden'} variants={variants} initial='hidden'>
        <Card className={styles.reviews}
          color='blue'
          ref={reviewRef}
        >
          {product.reviews.map(review => (
            <div key={review._id}>
              <Review review={review} />
              <Divider />
            </div>
          ))}
          <ReviewForm productId={product._id} />
        </Card>
      </motion.div>
    </div>
  );
}));

export default Product;