import React from 'react';
import { IVacanciesDataProps } from './VacanciesData.props';
import styles from './VacanciesData.module.css';
import Card from '../Card/Card';
import RateSvg from '../RateSvg/RateSvg';

const VacanciesData: React.FC<IVacanciesDataProps> = ({ count, juniorSalary, middleSalary, seniorSalary }) => {
    return (
        <div className={styles.vacancies}>
            <Card className={styles.count}>
                <div className={styles.title}>Total vacancies</div>
                <div className={styles.countValue}>{count}</div>
            </Card>
            <Card className={styles.salary}>
                <div>
                    <div className={styles.title}>Elementary</div>
                    <div className={styles.salaryValue}>{juniorSalary}</div>
                    <div className={styles.rate}>
                        <RateSvg className={styles.filled} />
                        <RateSvg />
                        <RateSvg />
                    </div>
                </div>
                <div>
                    <div className={styles.title}>Middle</div>
                    <div className={styles.salaryValue}>{middleSalary}</div>
                    <div className={styles.rate}>
                        <RateSvg className={styles.filled} />
                        <RateSvg className={styles.filled} />
                        <RateSvg />
                    </div>
                </div>
                <div>
                    <div className={styles.title}>Senior</div>
                    <div className={styles.salaryValue}>{seniorSalary}</div>
                    <div className={styles.rate}>
                        <RateSvg className={styles.filled} />
                        <RateSvg className={styles.filled} />
                        <RateSvg className={styles.filled} />
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default VacanciesData;