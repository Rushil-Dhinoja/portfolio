import footerStyles from "./LayoutStyles/FooterStyles";
import reusableStyles from "./LayoutStyles/ReusabelStyles";

export default function Footer() {
  const commonStyles = reusableStyles();
  const styles = footerStyles();
  return (
    <div className={commonStyles.wrapperWithMargin}>
      <div className={styles.endNote}>
        signing off <br />
        rushil dhinoja, full time software engineer <br />
        part time writter <br />
      </div>
      <div className={styles.copyText}>
        copyright &copy; {new Date().getFullYear()}. rushil dhinoja
      </div>
    </div>
  );
}
