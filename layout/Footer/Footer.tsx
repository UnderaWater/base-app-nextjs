import React from 'react';
import styles from './Footer.module.css';
import { IFooterProps } from './Footer.props';
import cn from 'classnames';
import { format } from 'date-fns'

const Footer: React.FC<IFooterProps> = ({ className, ...props }) => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>
        Copyright 2020 - {format(new Date(), 'yyyy')} All rights reserved
      </div>
      <a href='#' target='_blank'>User Agreement</a>
      <a href='#' target='_blank'>Privacy Policy</a>
    </footer>
  );
};

export default Footer;