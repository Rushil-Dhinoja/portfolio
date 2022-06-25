import classNames from "classnames";
import Image from "next/image";
import Images from "../constants/Images";
import reusableStyles from "./LayoutStyles/ReusabelStyles";
import data from "../CMS/Data/data.json";
import reactIntroStyles from "./LayoutStyles/ReactIntroStyles";

export default function ReactIntro() {
  const commonStyles = reusableStyles();
  const styles = reactIntroStyles();
  const sectionClasses = classNames(
    commonStyles.wrapper,
    commonStyles.wrapperWithMargin
  );

  const reactSection = data.reactSection;

  return (
    <section className={sectionClasses}>
      <div>
        <Image
          src={Images.reactSection}
          alt="react-image"
          width={586}
          height={609}
        />
      </div>
      <div className={styles.headline}>{reactSection.headline}</div>
    </section>
  );
}
