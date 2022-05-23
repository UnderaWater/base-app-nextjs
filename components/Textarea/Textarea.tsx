import React from 'react';
import cn from 'classnames';
import styles from './Textarea.module.css';
import { ITextareaProps } from './Textarea.props';

const Textarea: React.FC<ITextareaProps> = ({ className, ...props }) => {
  return (
    <textarea className={cn(className, styles.textarea)} {...props}/>
  );
};

export default Textarea;