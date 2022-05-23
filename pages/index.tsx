import axios from "axios";
import { GetStaticProps } from "next";
import Button from "../components/Button/Button";
import Htag from "../components/Htag/Htag";
import Input from "../components/Input/Input";
import P from "../components/P/P";
import Rating from "../components/Rating/Rating";
import Tag from "../components/Tag/Tag";
import { IMenuItem } from "../interfaces/menu.interface";
import { withLayout } from "../layout/Layout";

const Home: React.FC<IHomeProps> = ({ menu, firstCategory }) => {
  return (
    <>
      <Htag tag="h1">Hello</Htag>
      <Button appearance="primary" arrow="down">Button</Button>
      <Button appearance="ghost" arrow="down">Button</Button>
      <P size="l">Lorem ipsum dolor sit.</P>
      <P size="m">Lorem ipsum dolor sit.</P>
      <Tag>Lorem, ipsum.</Tag>
      <Tag size="m" color="red">Lorem, ipsum.</Tag>
      <Tag size="s" color="green">Lorem, ipsum.</Tag>
      <Rating rating={4} isEditable />
      <Input placeholder="text" />
    </>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
		firstCategory
	});
  
	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface IHomeProps extends Record<string, unknown> {
  menu: IMenuItem[];
  firstCategory: number;
}