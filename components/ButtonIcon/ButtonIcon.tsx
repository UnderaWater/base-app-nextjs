import React from 'react';
import { IButtonIconProps, icons } from './Button.props';
import cn from 'classnames';
import styles from './ButtonIcon.module.css';

const ButtonIcon: React.FC<IButtonIconProps> = ({ appearance, icon, className, ...props }) => {
    const IconComp = icons[icon];

    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearance === 'primary',
                [styles.white]: appearance === 'white'
            })}
            {...props}
        >
            <IconComp />
        </button>
    );
};

export default ButtonIcon;