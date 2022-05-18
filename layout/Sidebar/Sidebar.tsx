import React from 'react';
import { ISidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import Menu from '../Menu/Menu';
import cn from 'classnames';

const Sidebar: React.FC<ISidebarProps> = ({ className, ...props }) => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
        <div className={styles.logo}>LOGO</div>
        <div>search</div>
        <Menu />
    </div>
  );
};

export default Sidebar;