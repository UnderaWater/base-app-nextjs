import React from 'react';
import { IAdvantagesProps } from './Advantages.props';
import styles from './Advantages.module.css';
import CheckSvg from '../CheckSvg/CheckSvg';

const Advantages: React.FC<IAdvantagesProps> = ({ advantages }) => {
    return (
        <>
            {advantages.map(item => (
                <div key={item._id} className={styles.advantage}>
                    <CheckSvg />
                    <div className={styles.title}>
                        {item.title}
                    </div>
                    <div>
                        {item.description}
                    </div>
                </div>
            ))}
        </>
    );
};

export default Advantages;