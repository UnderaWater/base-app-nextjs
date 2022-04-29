import React from 'react';
import styles from './P.module.css';
import { IPProps } from './P.props';
import cn from 'classnames';

const P: React.FC<IPProps> = ({ children, size = 'm', className, ...props }) => {
    return (
        <p
        className={cn(className, {
            [styles.s]: size === 's',
            [styles.m]: size === 'm',
            [styles.l]: size === 'l',
        })}
            {...props}
        >
            {children}
        </p>
    );
};

export default P;