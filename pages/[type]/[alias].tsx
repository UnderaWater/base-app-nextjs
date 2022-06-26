import axios from 'axios';
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { API } from '../../helpers/api';
import { firstLevelMenu } from '../../helpers/helpers';
import { IMenuItem } from '../../interfaces/menu.interface';
import { ITopPageModel, TopLevelCategory } from '../../interfaces/page.interface';
import { IProductModel } from '../../interfaces/product.interface';
import { withLayout } from '../../layout/Layout';
import TopPageComponent from '../../page-components/TopPageComponent/TopPageComponent';
import { Error404 } from '../404';

const TopPage: React.FC<ITopPageProps> = ({ firstCategory, page, products }) => {
    if (!page || !products) {
        return <Error404 />
    }

    return (
        <>
            <Head>
                <title>
                    {page.metaTitle}
                </title>
                <meta name='description' content={page.metaDescription} />
                <meta property='og:title' content={page.metaTitle} />
                <meta property='og:description' content={page.metaDescription} />
                <meta property='og:type' content='article' />
            </Head>
            <TopPageComponent firstCategory={firstCategory} page={page} products={products} />
        </>
    );
};

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
    let paths: string[] = [];

    for (const m of firstLevelMenu) {
        const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, {
            firstCategory: m.id
        });

        paths = paths.concat(menu.flatMap(item => item.pages.map(page => `/${m.route}/${page.alias}`)));
    }

    return {
        paths,
        fallback: false
    };
};

export const getStaticProps: GetStaticProps<ITopPageProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
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
        const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, {
            firstCategory: firtsCategoryItem.id
        });

        if (menu.length === 0) {
            return {
                notFound: true
            };
        }

        const { data: page } = await axios.get<ITopPageModel>(API.topPage.byAlias + params.alias);

        const { data: products } = await axios.post<IProductModel[]>(API.product.find, {
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

interface ITopPageProps extends Record<string, unknown> {
    menu: IMenuItem[];
    firstCategory: TopLevelCategory;
    page: ITopPageModel;
    products: IProductModel[];
}