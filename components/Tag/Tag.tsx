import React from 'react';
import { ITag } from './Tag.props';
import cn from 'classnames';
import styles from './Tag.module.css';

const Tag: React.FC<ITag> = ({ size = 'm', children, className, href, color = 'ghost', ...props }) => {
    return (
        <div
            className={cn(styles.tag, className, {
                [styles.ghost]: color === 'ghost',
                [styles.red]: color === 'red',
                [styles.green]: color === 'green',
                [styles.gray]: color === 'gray',
                [styles.primary]: color === 'primary',
                [styles.m]: size === 'm',
                [styles.s]: size === 's'
            })}
            {...props}
        >
            {href ? <a href={href}>{children}</a> : <>{children}</>}
        </div>
    );
};

export default Tag;