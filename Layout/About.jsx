import classNames from "classnames";
import reusableStyles from "./LayoutStyles/ReusabelStyles";
import aboutStyles from "./LayoutStyles/AboutStyles";
import data from "../CMS/Data/data.json";
import Image from "next/image";
import Images from "../constants/Images";

export default function Skills() {
  const commonStyles = reusableStyles();
  const styles = aboutStyles();
  const sectionClasses = classNames(commonStyles.wrapperWithMargin);
  const skillsData = data.skills;
  const experienceData = data.experience;
  const educationData = data.education;
  return (
    <section id="about" className={sectionClasses}>
      <h3 className={styles.heading}>about</h3>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutItem}>
          <h6 className={styles.aboutItemHeading}>skills</h6>
          <div className={styles.skillsContainer}>
            {skillsData.map((skill, index) => (
              <div className={styles.skill} key={index}>
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.aboutItem}>
          <h6 className={styles.aboutItemHeading}>experience</h6>
          <div className={styles.experienceContainer}>
            {experienceData.map((experience, index) => (
              <div key={index} className={styles.experienceItem}>
                <div className={styles.experienceImage}>
                  <Image
                    src={Images[experience.image]}
                    layout="fill"
                    objectFit="contain"
                    alt={experience.company}
                  />
                </div>
                <div className={styles.experienceInfo}>
                  <div>{experience.company}</div>
                  <div>{experience.designation}</div>
                  <div>
                    {experience.start} -{" "}
                    {experience.current ? "present" : experience.end}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.aboutItem}>
          <h6 className={styles.aboutItemHeading}>education</h6>
          <div className={styles.educationContainer}>
            {educationData.map((education, index) => (
              <div className={styles.educationItem} key={index}>
                <div>
                  <div>{education.school}</div>
                  <div>
                    {education.degree} in {education.major}
                  </div>
                  <div>
                    {education.start} -{" "}
                    {education.current ? "present" : education.end}
                  </div>
                </div>
                <div className={styles.grades}>
                  <div className={styles.grade}>{education.grade}</div>
                  <div className={styles.gradeSystem}>
                    {education.gradeSystem}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
