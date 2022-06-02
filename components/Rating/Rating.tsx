import React, { ForwardedRef, forwardRef, useEffect, useState } from 'react';
import StarSvg from '../StarSvg/StarSvg';
import { IRatingProps } from './Rating.props';
import cn from 'classnames';
import styles from './Rating.module.css';

const Rating = forwardRef(({ rating, setRating, isEditable = false, ...props }: IRatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

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

    const handleSpace = (i: number, e: React.KeyboardEvent<SVGElement>) => {
        if (e.code !== 'Space' || !setRating) {
            return;
        }
        setRating(i);
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
                >
                    <StarSvg
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: React.KeyboardEvent<SVGElement>) => isEditable && handleSpace(index + 1, e)}
                    />
                </span>
            );
        });
        setRatingArray(updateArray);
    };

    useEffect(() => {
        createRating(rating);
    }, [rating]);

    return (
        <div {...props} ref={ref}>
            {ratingArray.map((item, index) => (<span key={index}>{item}</span>))}
        </div>
    );
});

export default Rating;