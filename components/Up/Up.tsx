import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useScrollY } from '../../hooks/useScrollY';
import UpSvg from '../UpSvg/UpSvg';
import styles from './Up.module.css';

const Up: React.FC = () => {
    const controls = useAnimation();

    const y = useScrollY();

    useEffect(() => {
        controls.start({
            opacity: y / document.body.scrollHeight
        });
    }, [y, controls]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <motion.button
            className={styles.up}
            onClick={scrollToTop}
            animate={controls}
            initial={{ opacity: 0 }}
        >
            <UpSvg />
        </motion.button>
    );
};

export default Up;