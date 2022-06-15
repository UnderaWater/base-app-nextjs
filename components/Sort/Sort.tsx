import React from 'react';
import { ISortProps, SortEnum } from './Sort.props';
import cn from 'classnames';
import styles from './Sort.module.css';
import SortSvg from '../SortSvg/SortSvg';

const Sort: React.FC<ISortProps> = ({ sort, setSort, className, ...props }) => {
    return (
        <div className={cn(styles.sort, className)} {...props}>
            <button
                onClick={() => setSort(SortEnum.Rating)}
                className={cn({
                    [styles.active]: sort === SortEnum.Rating
                })}
            >
                <SortSvg className={styles.sortIcon} />
                by rating
            </button>
            <button
                onClick={() => setSort(SortEnum.Price)}
                className={cn({
                    [styles.active]: sort === SortEnum.Price
                })}
            >
                <SortSvg className={styles.sortIcon} />
                by price
            </button>
        </div>
    );
};

export default Sort;