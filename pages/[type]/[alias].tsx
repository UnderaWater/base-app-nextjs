import axios from 'axios';
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { firstLevelMenu } from '../../helpers/helpers';
import { IMenuItem } from '../../interfaces/menu.interface';
import { ITopPageModel, TopLevelCategory } from '../../interfaces/page.interface';
import { IProductModel } from '../../interfaces/product.interface';
import { withLayout } from '../../layout/Layout';

const Course: React.FC<ICourseProps> = ({ menu, page, products }) => {
    return (
        <div>
            {products && products.length}
        </div>
    );
};

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
    let paths: string[] = [];

    for (const m of firstLevelMenu) {
        const { data: menu } = await axios.post<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
            firstCategory: m.id
        });

        paths = paths.concat(menu.flatMap(item => item.pages.map(page => `/${m.route}/${page.alias}`)));
    }

    return {
        paths,
        fallback: true
    };
};

export const getStaticProps: GetStaticProps<ICourseProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true
        };
    }

    const firtsCategoryItem = firstLevelMenu.find(m => m.route === params.type);
    if (!firtsCategoryItem) {
        return {
            notFound: true
        };
    }

    try {
        const { data: menu } = await axios.post<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
            firstCategory: firtsCategoryItem.id
        });

        if (menu.length === 0) {
            return {
                notFound: true
            };
        }

        const { data: page } = await axios.get<ITopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/ByAlias/' + params.alias);

        const { data: products } = await axios.post<IProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
            category: page.category,
            limit: 10
        });

        return {
            props: {
                menu,
                firstCategory: firtsCategoryItem.id,
                page,
                products
            }
        };
    } catch (error) {
        return {
            notFound: true
        };
    }
};

interface ICourseProps extends Record<string, unknown> {
    menu: IMenuItem[];
    firstCategory: TopLevelCategory;
    page: ITopPageModel;
    products: IProductModel[];
}