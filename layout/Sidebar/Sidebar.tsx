import React from 'react';
import { ISidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import Menu from '../Menu/Menu';

const Sidebar: React.FC<ISidebarProps> = ({ ...props }) => {
  return (
    <div {...props}>
        <Menu />
    </div>
  );
};

export default Sidebar;