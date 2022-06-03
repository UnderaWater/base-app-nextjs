import React from 'react';
import { IReviewFormProps } from './ReviewForm.props';
import cn from 'classnames';
import styles from './ReviewForm.module.css';
import Input from '../Input/Input';
import Rating from '../Rating/Rating';
import Textarea from '../Textarea/Textarea';
import Button from '../Button/Button';
import { Controller, useForm } from 'react-hook-form';
import { IReviewForm } from '../../interfaces/reviewForm.interface';

const ReviewForm: React.FC<IReviewFormProps> = ({ productId, className, ...props }) => {
  const { register, control, handleSubmit, formState: { errors } } = useForm<IReviewForm>();

  const onSubmit = (data: IReviewForm) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input
          {...register('name', { required: { value: true, message: 'fill in the name' } })}
          placeholder='Name'
          error={errors.name}
        />
        <Input
          {...register('title', { required: { value: true, message: 'fill in the title review' } })}
          placeholder='title review'
          className={styles.title}
          error={errors.title}
        />
        <div className={styles.rating}>
          <span>estimation:</span>
          <Controller
            control={control}
            name='rating'
            render={
              ({ field }) => (
                <Rating isEditable rating={field.value} ref={field.ref} setRating={field.onChange} />
              )
            }
          />
        </div>
        <Textarea
          {...register('description', { required: { value: true, message: 'fill in the description' } })}
          placeholder='Text review'
          className={styles.description}
          error={errors.description}
        />
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
    </form>
  );
};

export default ReviewForm;