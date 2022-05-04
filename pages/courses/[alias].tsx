import axios from 'axios';
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { IMenuItem } from '../../interfaces/menu.interface';
import { ITopPageModel } from '../../interfaces/page.interface';
import { IProductModel } from '../../interfaces/product.interface';
import { withLayout } from '../../layout/Layout';

const firstCategory = 0;

const Course: React.FC<ICourseProps> = ({ menu, page, products }) => {
    return (
        <div>
            {products && products.length}
        </div>
    );
};

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
    const { data: menu } = await axios.post<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });

    return {
        paths: menu.flatMap(m => m.pages.map(page => '/courses/' + page.alias)),
        fallback: true
    };
};

export const getStaticProps: GetStaticProps<ICourseProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    const { data: menu } = await axios.post<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });

    if (!params) {
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
            firstCategory,
            page,
            products
        }
    };
};

interface ICourseProps extends Record<string, unknown> {
    menu: IMenuItem[];
    firstCategory: number;
    page: ITopPageModel;
    products: IProductModel[];
}