import CTA from "../components/CTA";
import Logo from "../components/Logo";
import MenuItems from "../components/MenuItems";
import navigationStyles from "./LayoutStyles/NavigationStyles";

export default function Navigation() {
  const Styles = navigationStyles();

  return (
    <nav className={Styles.header}>
      <Logo />
      <MenuItems />
      <CTA />
    </nav>
  );
}
