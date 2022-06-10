import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useScrollY } from '../../hooks/useScrollY';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
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
        <motion.div
            className={styles.up}
            animate={controls}
            initial={{ opacity: 0 }}
        >
            <ButtonIcon appearance='white' icon='MenuSvg' onClick={scrollToTop} />
        </motion.div>
    );
};

export default Up;