import React from 'react';
import { ICardProps } from './Card.props';
import cn from 'classnames';
import styles from './Card.module.css';

const Card: React.FC<ICardProps> = ({ color = 'white', children, className, ...props }) => {
  return (
    <div className={cn(styles.card, className, {
        [styles.blue]: color === 'blue'
    })} {...props}>
        {children}
    </div>
  );
};

export default Card;