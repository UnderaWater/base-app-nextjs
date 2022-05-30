import React from 'react';
import { IDividerProps } from './Divider.props';
import styles from './Divider.module.css';
import cn from 'classnames';

const Divider: React.FC<IDividerProps> = ({ className, ...props }) => {
    return (
		<hr className={cn(className, styles.hr)} {...props} />
	);
};

export default Divider;