import CTAStyles from "./ComponentStyles/CTAStyles";

export default function CTA() {
  const Styles = CTAStyles();

  return <button className={Styles.button}>get in touch</button>;
}
