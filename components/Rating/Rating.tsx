import React, { ForwardedRef, forwardRef, useEffect, useRef, useState } from 'react';
import StarSvg from '../StarSvg/StarSvg';
import { IRatingProps } from './Rating.props';
import cn from 'classnames';
import styles from './Rating.module.css';

const Rating = forwardRef(({ rating, setRating, error, isEditable = false, tabIndex, ...props }: IRatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
    const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return;
        }
        createRating(i);
    };

    const onClick = (i: number) => {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(i);
    };

    const handleKey = (e: React.KeyboardEvent) => {
        if (!isEditable || !setRating) {
            return;
        }
        if (e.code === 'ArrowRight' || e.code === 'ArrowUp') {
            if (!rating) {
                setRating(1);
            } else {
                e.preventDefault();
                setRating(rating < 5 ? rating + 1 : 5);
            }
            ratingArrayRef.current[rating]?.focus();
        }
        if (e.code === 'ArrowLeft' || e.code === 'ArrowDown') {
            e.preventDefault();
            setRating(rating < 1 ? rating - 1 : 1);
            ratingArrayRef.current[rating - 2]?.focus();
        }
    };

    const computeFocus = (r: number, i: number): number => {
        if (!isEditable) {
            return -1;
        }
        if (!rating && i === 0) {
            return tabIndex ?? 0;
        }
        if (r === i + 1) {
            return tabIndex ?? 0;
        }
        return -1;
    };

    const createRating = (currentRating: number) => {
        const updateArray = ratingArray.map((item: JSX.Element, index: number) => {
            return (
                <span
                    className={cn(styles.star, {
                        [styles.filled]: index < currentRating,
                        [styles.editable]: isEditable
                    })}
                    onMouseEnter={() => changeDisplay(index + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onClick(index + 1)}
                    tabIndex={computeFocus(rating, index)}
                    onKeyDown={handleKey}
                    ref={r => ratingArrayRef.current?.push(r)}
                    role={isEditable ? 'slider' : ''}
                    aria-valuenow={rating}
                    aria-valuemax={5}
                    aria-valuemin={1}
                    aria-label={isEditable ? 'Specify the rating' : `rating ${rating}`}
                    aria-invalid={error ? true : false}
                >
                    <StarSvg/>
                </span>
            );
        });
        setRatingArray(updateArray);
    };

    useEffect(() => {
        createRating(rating);
    }, [rating, tabIndex]);

    return (
        <div {...props} ref={ref} className={cn(styles.ratingWrapper, {
            [styles.error]: error
        })}>
            {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
            {error && <span role='alert' className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});

export default Rating;