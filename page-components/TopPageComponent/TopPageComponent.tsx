import React from 'react';
import Htag from '../../components/Htag/Htag';
import Tag from '../../components/Tag/Tag';
import { ITopPageCompnentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import Card from '../../components/Card/Card';
import VacanciesData from '../../components/VacanciesData/VacanciesData';

const TopPageComponent: React.FC<ITopPageCompnentProps> = ({ page, products, firstCategory }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag='h1'>{page.title}</Htag>
                {products && <Tag color='gray' size='m'>{products.length}</Tag>}
                <span>sort</span>
            </div>
            <div>
                {products && products.map(product => (<div key={product._id}>{product.title}</div>))}
            </div>
            <div className={styles.siteTitle}>
                <Htag tag='h2'>Vacancies - {page.category}</Htag>
                <Tag color='red' size='m'>indead.com</Tag>
            </div>
            <VacanciesData {...page.hh} />
        </div>
    );
};

export default TopPageComponent;