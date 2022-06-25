import menuItemsStyles from "./ComponentStyles/MenuItemsStyles";

const MENU_ITEMS = ["my creations", "about", "contact"];

export default function MenuItems() {
  const styles = menuItemsStyles();

  return (
    <div className={styles.menu}>
      {MENU_ITEMS.map((item, index) => (
        <div className={styles.menuItem} key={index}>
          {item}
        </div>
      ))}
    </div>
  );
}
