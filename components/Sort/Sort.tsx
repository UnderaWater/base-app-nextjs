import React from 'react';
import { ISortProps, SortEnum } from './Sort.props';
import cn from 'classnames';
import styles from './Sort.module.css';
import SortSvg from '../SortSvg/SortSvg';

const Sort: React.FC<ISortProps> = ({ sort, setSort, className, ...props }) => {
    return (
        <div className={cn(styles.sort, className)} {...props}>
            <div className={styles.sortName} id='sort'>Sort</div>
            <button
                id='rating'
                onClick={() => setSort(SortEnum.Rating)}
                className={cn({
                    [styles.active]: sort === SortEnum.Rating
                })}
                aria-selected={sort === SortEnum.Rating}
                aria-labelledby='sort rating'
            >
                <SortSvg className={styles.sortIcon} />
                by rating
            </button>
            <button
                id='price'
                onClick={() => setSort(SortEnum.Price)}
                className={cn({
                    [styles.active]: sort === SortEnum.Price
                })}
                aria-selected={sort === SortEnum.Price}
                aria-labelledby='sort price'
            >
                <SortSvg className={styles.sortIcon} />
                by price
            </button>
        </div>
    );
};

export default Sort;