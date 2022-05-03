import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { ILayoutProps } from './Layout.props';
import Sidebar from './Sidebar/Sidebar';
import styles from './Layout.module.css';

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>
        {children}
      </div>
      <Footer className={styles.footer} />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(Component: React.FC<T>) => {
  return function withLayoutComponent(props: T) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};

export default Layout;