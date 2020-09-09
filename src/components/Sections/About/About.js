import React from "react"
import AboutLeft from "./AboutLeft"
import AboutRight from "./AboutRight"

const About = () => {
  return (
    <div id="about" className="display-flex mt-custom-15">
      <AboutLeft />
      <AboutRight />
    </div>
  )
}

export default About
