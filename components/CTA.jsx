import classNames from "classnames";
import CTAStyles from "./ComponentStyles/CTAStyles";

export default function CTA({ className }) {
  const Styles = CTAStyles();

  const classes = classNames(className, Styles.button);

  return (
    <a href="mailto:dhinoja.rushil17@gmail.com" className={classes}>
      get in touch
    </a>
  );
}
