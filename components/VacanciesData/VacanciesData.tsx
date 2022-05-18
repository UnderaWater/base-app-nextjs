import React from 'react';
import { IVacanciesDataProps } from './VacanciesData.props';
import styles from './VacanciesData.module.css';
import Card from '../Card/Card';

const VacanciesData: React.FC<IVacanciesDataProps> = ({ count }) => {
    return (
        <div className={styles.vacancies}>
            <Card className={styles.count}>
                <div className={styles.title}>Total vacancies</div>
                <div className={styles.sum}>{count}</div>
            </Card>
        </div>
    );
};

export default VacanciesData;