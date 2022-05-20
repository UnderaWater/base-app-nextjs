import React from 'react';
import Htag from '../../components/Htag/Htag';
import Tag from '../../components/Tag/Tag';
import { ITopPageCompnentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import VacanciesData from '../../components/VacanciesData/VacanciesData';
import { TopLevelCategory } from '../../interfaces/page.interface';
import Advantages from '../../components/Advantages/Advantages';
import P from '../../components/P/P';

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
            {firstCategory === TopLevelCategory.Courses && page.hh && <VacanciesData {...page.hh} />}
            {page.advantages && page.advantages.length > 0 && <>
                <Htag tag='h2'>Advantages</Htag>
                <Advantages advantages={page.advantages} />
            </>}
            {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText}}></div>}
            <Htag tag='h2'>Acquired skills</Htag>
            {page.tags.map(tag => <Tag key={tag} color='primary'>{tag}</Tag>)}
        </div>
    );
};

export default TopPageComponent;