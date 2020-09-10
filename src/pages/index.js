import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Sections/Header/Header"
import About from "../components/Sections/About/About"
import Projects from "../components/Sections/Projects/Projects"
import Contact from "../components/Sections/Contact/Contact"
import SocialGroup from "../components/social/SocialGroup"

export default function Home() {
  return (
    <Layout>
      <Header />
      <About />
      {/* <Projects /> */}
      <Contact />
      <SocialGroup />
    </Layout>
  )
}
