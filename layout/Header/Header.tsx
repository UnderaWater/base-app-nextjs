import React from 'react';
import { IHeaderProps } from './Header.props';
import styles from './Header.module.css';

const Header: React.FC<IHeaderProps> = ({ ...props }) => {
  return (
    <div {...props}>
      Header
    </div>
  );
};

export default Header;