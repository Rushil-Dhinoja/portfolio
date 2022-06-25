import logoStyles from "./ComponentStyles/LogoStyles";

export default function Logo() {
  const Styles = logoStyles();

  return (
    <div className={Styles.logo}>
      <span>
        Rushil<span className={Styles["logo-dot"]}>.</span>
      </span>
    </div>
  );
}
