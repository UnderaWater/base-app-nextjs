import React, { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';
import styles from './Input.module.css';
import { IInputProps } from './Input.props';

const Input: React.FC = forwardRef(({ className, ...props }: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <input className={cn(className, styles.input)} ref={ref} {...props}/>
  );
});

export default Input;