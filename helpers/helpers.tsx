import { IFirstLevelMenuItem } from '../interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/page.interface';
import BooksSvg from './icons/Books/BooksSvg';
import CoursesSvg from './icons/Courses/CoursesSvg';
import ProductsSvg from './icons/Products/ProductsSvg';
import ServicesSvg from './icons/Services/ServicesSvg';


export const firstLevelMenu: IFirstLevelMenuItem[] = [
    { route: 'courses', name: 'Courses', icon: <CoursesSvg />, id: TopLevelCategory.Courses },
    { route: 'services', name: 'Services', icon: <ServicesSvg />, id: TopLevelCategory.Services },
    { route: 'books', name: 'Books', icon: <BooksSvg />, id: TopLevelCategory.Books },
    { route: 'products', name: 'Products', icon: <ProductsSvg />, id: TopLevelCategory.Products }
];