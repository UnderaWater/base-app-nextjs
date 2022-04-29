import Button from "../components/Button/Button";
import Htag from "../components/Htag/Htag";
import P from "../components/P/P";
import Tag from "../components/Tag/Tag";

export default function Home() {
  return (
    <div>
      <Htag tag="h1">Hello</Htag>
      <Button appearance="primary" arrow="down">Button</Button>
      <Button appearance="ghost" arrow="down">Button</Button>
      <P size="l">Lorem ipsum dolor sit.</P>
      <P size="m">Lorem ipsum dolor sit.</P>
      <Tag>Lorem, ipsum.</Tag>
      <Tag size="m" color="red">Lorem, ipsum.</Tag>
      <Tag size="s" color="green">Lorem, ipsum.</Tag>
    </div>
  );
}
