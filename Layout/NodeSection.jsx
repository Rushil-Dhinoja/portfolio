import classNames from "classnames";
import Image from "next/image";
import Images from "../constants/Images";
import reusableStyles from "./LayoutStyles/ReusabelStyles";
import data from "../CMS/Data/data.json";
import nodeSectionStyles from "./LayoutStyles/NodeSectionStyles";

export default function NodeSection() {
  const commonStyles = reusableStyles();
  const styles = nodeSectionStyles();
  const sectionClasses = classNames(
    commonStyles.wrapper,
    commonStyles.wrapperWithMargin
  );

  const reactSection = data.nodeSection;

  return (
    <section className={sectionClasses}>
      <div className={styles.headline}>{reactSection.headline}</div>
      <div className={styles.sectionRight}>
        <Image
          src={Images.nodeImage}
          alt="react-image"
          width={652}
          height={530}
        />
      </div>
    </section>
  );
}
