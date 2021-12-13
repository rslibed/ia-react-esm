import { FC, ReactElement } from "react";

const CSS = {
  base: "esri-instant-apps__header"
};

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = (props: HeaderProps): ReactElement => {
  return (
    <header className={CSS.base}>
      <h1>{props.title}</h1>
    </header>
  );
};

export default Header;
