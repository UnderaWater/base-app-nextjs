import React from 'react';
import cn from 'classnames';
import styles from './Input.module.css';
import { IInputProps } from './Input.props';

const Input: React.FC<IInputProps> = ({ className, ...props }) => {
  return (
    <input className={cn(className, styles.input)} {...props}/>
  );
};

export default Input;