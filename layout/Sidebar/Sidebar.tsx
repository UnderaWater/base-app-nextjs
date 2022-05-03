import React from 'react';
import { ISidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';

const Sidebar: React.FC<ISidebarProps> = ({ ...props }) => {
  return (
    <div {...props}>
        Sidebar
    </div>
  );
};

export default Sidebar;