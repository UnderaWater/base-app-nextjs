import React from 'react';
import axios from "axios";
import { GetStaticProps } from "next";
import { IMenuItem } from '../interfaces/menu.interface';
import { withLayout } from '../layout/Layout';
import { API } from '../helpers/api';

const Search: React.FC = () => {
  return (
    <>
    Search
    </>
  );
};

export default withLayout(Search);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, {
		firstCategory
	});
	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: IMenuItem[];
	firstCategory: number;
}