import Link from "next/link";
import menuItemsStyles from "./ComponentStyles/MenuItemsStyles";

const MENU_ITEMS = ["my creations", "about", "contact"];
const idMap = {
  "my creations": "creations",
  about: "about",
  contact: "contact",
};
export default function MenuItems() {
  const styles = menuItemsStyles();

  return (
    <div className={styles.menu}>
      {MENU_ITEMS.map((item, index) => (
        <div key={index} className={styles.menuItem}>
          <Link style={{ textDecoration: "none" }} href={`#${idMap[item]}`}>
            {item}
          </Link>
        </div>
      ))}
    </div>
  );
}
