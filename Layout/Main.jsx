import Navigation from "./Navigation";
import mainStyles from "./LayoutStyles/MainStyles";
import Header from "./Header";
import ReactIntro from "./ReactIntro";
import NodeSection from "./NodeSection";
import MyCreations from "./MyCreations";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

export function Main() {
  const styles = mainStyles();

  return (
    <div className={styles.container}>
      <Navigation />
      <main className={styles.main}>
        <Header />
        <ReactIntro />
        <NodeSection />
        <MyCreations />
        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
