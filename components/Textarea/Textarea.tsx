import React, { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';
import styles from './Textarea.module.css';
import { ITextareaProps } from './Textarea.props';

const Textarea = forwardRef(({ className, error, ...props }: ITextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
  return (
    <div className={cn(className, styles.textareaWrapper)}>
      <textarea className={cn(styles.textarea, {
        [styles.error]: error
      })} ref={ref} {...props} />
      {error && <span className={styles.errorMesage}>{error.message}</span>}
    </div>
  );
});

export default Textarea;