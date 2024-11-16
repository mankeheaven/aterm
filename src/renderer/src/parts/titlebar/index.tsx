import Logo from "./logo";
import Title from "./title";
import TitlebarMenu from "./titlebar-menu";

const Titlebar = () => {
  return (
    <div className="titlebar">
      <Logo />
      <TitlebarMenu />
      <Title />
    </div>
  );
};

export default Titlebar;
