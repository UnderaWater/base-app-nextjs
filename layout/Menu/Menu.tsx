import React, { useContext } from 'react';
import { AppContext } from '../../context/context';
import { IFirstLevelMenuItem, IPageItem } from '../../interfaces/menu.interface';
import { TopLevelCategory } from '../../interfaces/page.interface';
import BooksSvg from './Books/BooksSvg';
import CoursesSvg from './Courses/CoursesSvg';
import ProductsSvg from './Products/ProductsSvg';
import ServicesSvg from './Services/ServicesSvg';
import styles from './Menu.module.css';
import cn from 'classnames';

const firstLevelMenu: IFirstLevelMenuItem[] = [
    { route: 'courses', name: 'Courses', icon: <CoursesSvg />, id: TopLevelCategory.Courses },
    { route: 'services', name: 'Services', icon: <ServicesSvg />, id: TopLevelCategory.Services },
    { route: 'books', name: 'Books', icon: <BooksSvg />, id: TopLevelCategory.Books },
    { route: 'products', name: 'Products', icon: <ProductsSvg />, id: TopLevelCategory.Products }
];

const Menu: React.FC = () => {
    const { menu, setMenu, firstCategory } = useContext(AppContext);

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(m => (
                    <div key={m.route}>
                        <a href={`/${m.route}`}>
                            <p className={cn(styles.firstLevel, {
                                [styles.firstLevelActive]: m.id === firstCategory
                            })}>
                                {m.icon}
                                <span>{m.name}</span>
                            </p>
                        </a>
                        {m.id === firstCategory && buildSecondLevel(m)}
                    </div>
                ))}
            </>
        );
    };

    const buildSecondLevel = (menuItem: IFirstLevelMenuItem) => {
        return (
            <div className={styles.secondBlock}>
                {menu.map(m => (
                    <div key={m._id.secondCategory}>
                        <div className={styles.secondLevel}>
                            {m._id.secondCategory}
                        </div>
                        <div className={cn(styles.secondLevelBlock, {
                            [styles.secondLevelBlockOpened]: m.isOpened
                        })}>
                            {buildThirdLevel(m.pages, menuItem.route)}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const buildThirdLevel = (pages: IPageItem[], route: string) => {
        return (
            pages.map(p => (
                <a href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel, {
                    [styles.thirdLevelActive]: false
                })}>
                    {p.category}
                </a>
            ))
        );
    };

    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    );
};

export default Menu;