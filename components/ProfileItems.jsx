import Image from "next/image";
import Images from "../constants/Images";
import profileItemStyles from "./ComponentStyles/ProfileItemStyles";

export default function ProfileItem(props) {
  const styles = profileItemStyles(props);

  const {
    data: { link, name },
  } = props;
  return (
    <a
      data-tooltip={link}
      href={link}
      target="_blank"
      rel="noreferrer"
      className={styles.item}
    >
      <Image
        src={Images[name]}
        alt={name}
        width={28}
        height={28}
        className={styles.image}
        layout="raw"
      />
    </a>
  );
}
