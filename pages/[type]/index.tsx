import React from 'react';
import axios from "axios";
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from 'querystring';
import { IMenuItem } from '../../interfaces/menu.interface';
import { withLayout } from '../../layout/Layout';
import { firstLevelMenu } from '../../helpers/helpers';
import { API } from '../../helpers/api';

const Type: React.FC<TypeProps> = ({ firstCategory }) => {
    return (
        <>
            Type: {firstCategory}
        </>
    );
};

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: firstLevelMenu.map(m => '/' + m.route),
        fallback: false
    };
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true
        };
    }

    const firstCategoryItem = firstLevelMenu.find(m => m.route == params.type);
    if (!firstCategoryItem) {
        return {
            notFound: true
        };
    }

    const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, {
        firstCategory: firstCategoryItem.id
    });

    return {
        props: {
            menu,
            firstCategory: firstCategoryItem.id
        }
    };
};

interface TypeProps extends Record<string, unknown> {
    menu: IMenuItem[];
    firstCategory: number;
}