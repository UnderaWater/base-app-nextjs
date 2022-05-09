import React, { useContext } from 'react';
import { AppContext } from '../../context/context';
import { IFirstLevelMenuItem } from '../../interfaces/menu.interface';
import { TopLevelCategory } from '../../interfaces/page.interface';
import BooksSvg from './Books/BooksSvg';
import CoursesSvg from './Courses/CoursesSvg';
import ProductsSvg from './Products/ProductsSvg';
import ServicesSvg from './Services/ServicesSvg';
import styles from './Menu.module.css';
import cn from 'classnames';

const firstLevelMenu: IFirstLevelMenuItem[] = [
    { route: 'courses', name: 'Courses', icon: <CoursesSvg/>, id: TopLevelCategory.Courses },
    { route: 'services', name: 'Services', icon: <ServicesSvg/>, id: TopLevelCategory.Services },
    { route: 'books', name: 'Books', icon: <BooksSvg/>, id: TopLevelCategory.Books },
    { route: 'products', name: 'Products', icon: <ProductsSvg/>, id: TopLevelCategory.Products }
];

const Menu: React.FC = () => {
    const { menu, setMenu, firstCategory } = useContext(AppContext);
    
    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(menu => (
                    <div key={menu.route}>
                        <a href={`/${menu.route}`}>
                            <p className={cn(styles.firstLevel, {
                                [styles.firstLevelActive]: menu.id === firstCategory
                            })}>
                                {menu.icon}
                                <span>{menu.name}</span>
                            </p>
                        </a>
                    </div>
                ))}
            </>
        )
    };

    // const buildSecondLevel = () => {

    // };

    // const buildThirdLevel = () => {

    // };

    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    );
};

export default Menu;