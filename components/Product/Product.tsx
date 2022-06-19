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
    reviewRef.current?.focus();
  };

  return (
    <div className={className} {...props} ref={ref}>
      <Card className={styles.product}>
        <div className={styles.logo}>
          <img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} />
        </div>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.price}>
          <span>
            <span className='visualyHidden'>price</span>
            {product.price}
          </span>
          {product.oldPrice && <Tag className={styles.oldPrice} color="green">
            <span className="visualyHidden">discount</span>
            {product.price - product.oldPrice}
          </Tag>}
        </div>
        <div className={styles.credit}>
          <span className='visualyHidden'>credit</span>
          {product.credit}/<span className={styles.month}>month</span>
        </div>
        <div className={styles.rating}>
          <span className='visualyHidden'>{'rating' + (product.reviewAvg ?? product.initialRating)}</span>
          <Rating rating={product.reviewAvg ?? product.initialRating} />
        </div>
        <div className={styles.tags}>
          {product.categories.map(category => (
            <Tag color='ghost' key={category}>
              {category}
            </Tag>
          ))}
        </div>
        <div className={styles.priceTitle} aria-hidden={true}>Price</div>
        <div className={styles.creditTittle} aria-hidden={true}>Credit</div>
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
            className={styles.reviewButton}
            aria-expanded={isRewievOpened}
          >
            read reviews
          </Button>
        </div>
      </Card>
      <motion.div animate={isRewievOpened ? 'visible' : 'hidden'} variants={variants} initial='hidden'>
        <Card className={styles.reviews}
          color='blue'
          ref={reviewRef}
          tabIndex={isRewievOpened ? 0 : -1}
        >
          {product.reviews.map(review => (
            <div key={review._id}>
              <Review review={review} />
              <Divider />
            </div>
          ))}
          <ReviewForm productId={product._id} isOpened={isRewievOpened} />
        </Card>
      </motion.div>
    </div>
  );
}));

export default Product;