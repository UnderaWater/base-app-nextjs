import React, { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';
import styles from './Textarea.module.css';
import { ITextareaProps } from './Textarea.props';

const Textarea: React.FC = forwardRef(({ className, ...props }: ITextareaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
  return (
    <textarea className={cn(className, styles.textarea)} ref={ref} {...props}/>
  );
});

export default Textarea;