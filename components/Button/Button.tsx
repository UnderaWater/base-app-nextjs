import React from 'react';
import { IButtonProps } from './Button.props';
import cn from 'classnames';
import styles from './Button.module.css';
import ArrowSvg from '../ArrowSvg/ArrowSvg';
import { motion } from 'framer-motion';

const Button: React.FC<IButtonProps> = ({ appearance, children, className, arrow = 'none', ...props }) => {
    return (
        <motion.button className={cn(styles.button, className, {
            [styles.primary]: appearance === 'primary',
            [styles.ghost]: appearance === 'ghost',
        })}
            {...props}
            whileHover={{ scale: 1.05 }}
        >
            {children}
            {arrow !== 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow === 'down',
            })}>
                <ArrowSvg />
            </span>}
        </motion.button>
    );
};

export default Button;