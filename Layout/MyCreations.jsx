import classNames from "classnames";
import ProjectCard from "../components/ProjectCard";
import myCreationsStyles from "./LayoutStyles/MyCreationsStyles";
import reusableStyles from "./LayoutStyles/ReusabelStyles";
import data from "../CMS/Data/data.json";
export default function MyCreations() {
  const commonStyles = reusableStyles();
  const styles = myCreationsStyles();
  const sectionClasses = classNames(commonStyles.wrapperWithMargin);
  const creationsData = data.creations;
  return (
    <section id="creations" className={sectionClasses}>
      <h2 className={styles.heading}>my creations</h2>
      <div className={styles.projectGallery}>
        {creationsData.map((creation, index) => (
          <ProjectCard key={index} data={creation} />
        ))}
      </div>
    </section>
  );
}
