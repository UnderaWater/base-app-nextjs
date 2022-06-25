import React, { useEffect, useState } from 'react';
import { IHeaderProps } from './Header.props';
import styles from './Header.module.css';
import cn from 'classnames';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import { motion, useReducedMotion } from 'framer-motion';
import Sidebar from '../Sidebar/Sidebar';
import { useRouter } from 'next/router';

const Header: React.FC<IHeaderProps> = ({ className, ...props }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setIsOpened(false)
  }, [router]);

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20
      }
    },
    closed: {
      opacity: shouldReduceMotion ? 1 : 0,
      x: '100%',
    }
  };

  return (
    <header className={cn(className, styles.header)} {...props}>
      <div>Logo</div>
      <ButtonIcon appearance='white' icon='MenuSvg' onClick={() => setIsOpened(true)} />
      <motion.div
        className={styles.mobileMenu}
        variants={variants}
        initial={'closed'}
        animate={isOpened ? 'opened' : 'closed'}
      >
        <Sidebar />
        <ButtonIcon
          className={styles.menuClose}
          appearance='white'
          icon='CloseSvg'
          onClick={() => setIsOpened(false)}
        />
      </motion.div>
    </header>
  );
};

export default Header;