import React from 'react';
import { IButtonProps } from './Button.props';
import cn from 'classnames';
import styles from './Button.module.css';
import ArrowSvg from '../ArrowSvg/ArrowSvg';

const Button: React.FC<IButtonProps> = ({ appearance, children, className, arrow = 'none', ...props }) => {
    return (
        <button className={cn(styles.button, className, {
            [styles.primary]: appearance === 'primary',
            [styles.ghost]: appearance === 'ghost',
        })}
            {...props}
        >
            {children}
            {arrow !== 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow === 'down',

            })}>
                <ArrowSvg />
            </span>}
        </button>
    );
};

export default Button;