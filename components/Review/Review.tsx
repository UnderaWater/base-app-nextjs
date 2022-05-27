import React from 'react';
import cn from 'classnames';
import { IReviewProps } from './Review.props';
import styles from './Review.module.css';
import UserSvg from '../UserSvg/UserSvg';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import Rating from '../Rating/Rating';

const Review: React.FC<IReviewProps> = ({ review, className, ...props }) => {
    const { name, title, description, createdAt, rating } = review;

    return (
        <div className={cn(styles.review, className)} {...props}>
            <UserSvg className={styles.user} />
            <div className={styles.title}>
                <span className={styles.name}>{name}:</span>
                <span>{title}</span>
            </div>
            <div className={styles.date}>
                {format(new Date(createdAt), 'MMMM dd yyyy', { locale: enUS })}
            </div>
            <div className={styles.rating}>
                <Rating rating={rating} />
            </div>
            <div className={styles.description}>
                {description}
            </div>
        </div>
    );
};

export default Review;