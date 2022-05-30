import React from 'react';
import { IReviewFormProps } from './ReviewForm.props';
import cn from 'classnames';
import styles from './ReviewForm.module.css';
import Input from '../Input/Input';
import Rating from '../Rating/Rating';
import Textarea from '../Textarea/Textarea';
import Button from '../Button/Button';

const ReviewForm: React.FC<IReviewFormProps> = ({ productId, className, ...props }) => {
  return (
    <>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input placeholder='Name' />
        <Input placeholder='title review' className={styles.title} />
        <div className={styles.rating}>
          <span>estimation:</span>
          <Rating rating={0} />
        </div>
        <Textarea placeholder='Text review' className={styles.description} />
        <div className={styles.submit}>
          <Button appearance='primary'>
            Submit
          </Button>
        </div>
      </div>
      <div className={styles.success}>
        <div className={styles.successTitle}>Your feedback has been sent</div>
        <div className={styles.close}>&#10006;</div>
      </div>
    </>
  );
};

export default ReviewForm;