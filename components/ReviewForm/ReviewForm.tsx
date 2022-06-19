import React, { useState } from 'react';
import { IReviewFormProps } from './ReviewForm.props';
import cn from 'classnames';
import styles from './ReviewForm.module.css';
import Input from '../Input/Input';
import Rating from '../Rating/Rating';
import Textarea from '../Textarea/Textarea';
import Button from '../Button/Button';
import { Controller, useForm } from 'react-hook-form';
import { IReviewForm, IReviewSentResponse } from '../../interfaces/reviewForm.interface';
import axios from 'axios';
import { API } from '../../helpers/api';

const ReviewForm: React.FC<IReviewFormProps> = ({ productId, isOpened, className, ...props }) => {
  const { register, control, handleSubmit, formState: { errors }, reset, clearErrors } = useForm<IReviewForm>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const onSubmit = async (formData: IReviewForm) => {
    try {
      const { data } = await axios.post<IReviewSentResponse>(API.review.createDemo, { ...formData, productId });
      if (data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setError('Something went wrong');
      }
    } catch (e: any) {
			setError(e.message);
		}
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input
          {...register('name', { required: { value: true, message: 'fill in the name' } })}
          placeholder='Name'
          error={errors.name}
          tabIndex={isOpened ? 0 : -1}
          aria-invalid={errors.name ? true : false}
        />
        <Input
          {...register('title', { required: { value: true, message: 'fill in the title review' } })}
          placeholder='title review'
          className={styles.title}
          error={errors.title}
          tabIndex={isOpened ? 0 : -1}
          aria-invalid={errors.title ? true : false}
        />
        <div className={styles.rating}>
          <span>estimation:</span>
          <Controller
            control={control}
            name='rating'
            rules={{ required: { value: true, message: 'specify the rating' } }}
            render={
              ({ field }) => (
                <Rating
                  isEditable
                  rating={field.value}
                  ref={field.ref}
                  setRating={field.onChange}
                  error={errors.rating}
                  tabIndex={isOpened ? 0 : -1}
                />
              )
            }
          />
        </div>
        <Textarea
          {...register('description', { required: { value: true, message: 'fill in the description' } })}
          placeholder='Text review'
          className={styles.description}
          error={errors.description}
          tabIndex={isOpened ? 0 : -1}
          aria-label='Text review'
          aria-invalid={errors.description ? true : false}
        />
        <div className={styles.submit}>
          <Button appearance='primary' tabIndex={isOpened ? 0 : -1} onClick={() => clearErrors()}>
            Submit
          </Button>
        </div>
      </div>
      {isSuccess && <div className={cn(styles.panel, styles.success)} onClick={() => setIsSuccess(false)}>
        <div className={styles.successTitle}>Your feedback has been sent</div>
        <div className={styles.close}>&#10006;</div>
      </div>}
      {error && <div className={cn(styles.panel, styles.error)} onClick={() => setError(undefined)}>
        Something went wrong, try refreshing the page
        <div className={styles.close}>&#10006;</div>
      </div>}
    </form>
  );
};

export default ReviewForm;