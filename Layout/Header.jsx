import classNames from "classnames";
import headerStyles from "./LayoutStyles/HeaderStyles";
import reusableStyles from "./LayoutStyles/ReusabelStyles";
import data from "../CMS/Data/data.json";
import Image from "next/image";
import Images from "../constants/Images";
import ProfileItem from "../components/ProfileItems";
import CTA from "../components/CTA";

export default function Header() {
  const styles = headerStyles();
  const commonStyles = reusableStyles();

  const headerClasses = classNames(commonStyles.wrapper, styles.header);

  const userInfo = data.info;

  return (
    <header className={headerClasses}>
      <div className={styles.headerLeft}>
        <div className={styles.name}>{userInfo.name} -</div>
        <div className={styles.designation}>{userInfo.designation}</div>
        <div className={styles.links}>
          {userInfo.links.map((link, index) => (
            <ProfileItem key={index} data={link} />
          ))}
        </div>
        <div>
          <CTA className={"mobile-screen"} />
        </div>
      </div>
      <div className={styles.headerRight}>
        <Image
          src={Images.headerImage}
          alt="Computer Graphic"
          width={645}
          height={604}
        />
      </div>
    </header>
  );
}
