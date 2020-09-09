import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Sections/Header/Header"
import About from "../components/Sections/About/About"
import Projects from "../components/Sections/Projects/Projects"

export default function Home() {
  return (
    <Layout>
      <Header />
      <About />
      <Projects />
    </Layout>
  )
}
