import { useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import Images from "../constants/Images";
import projectCardStyles from "./ComponentStyles/ProjectCardStyles";

const ProjectCard = (props) => {
  const {
    data: { name, techStack, image, description, github, live, npm, rotate },
  } = props;

  const styles = projectCardStyles(props);

  const bottomBarClasses = classNames(styles.bars, styles.bottomBar);

  return (
    <>
      <div className={styles.cardWrapper} style={{ "--rotate": rotate }}>
        <div className={styles.bars}>
          <div className={styles.name}>{name}</div>
          <div className={styles.techStack}>{techStack}</div>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src={Images.creations[image]}
            alt={name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={bottomBarClasses}>
          <div className={styles.links}>
            {github && (
              <a target="_blank" rel="noreferrer" href={github}>
                <Image
                  src={Images.githubIcon}
                  alt="github"
                  width={25}
                  height={25}
                />
              </a>
            )}
            {live && (
              <a target="_blank" rel="noreferrer" href={live}>
                <Image
                  src={Images.liveIcon}
                  alt="link"
                  width={25}
                  height={25}
                />
              </a>
            )}
            {npm && (
              <a className="npm" target="_blank" rel="noreferrer" href={npm}>
                <Image src={Images.npmIcon} alt="npm" width={25} height={25} />
              </a>
            )}
          </div>
        </div>
        <div className={styles.description}>{description}</div>
      </div>
    </>
  );
};

export default ProjectCard;
