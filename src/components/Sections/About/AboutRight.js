import React from "react"
import Timeline from "../../../assets/Timeline.svg"

const AboutLeft = () => {
  return (
    <div className="lg:width-50 width-100 display-flex justify-center align-center ">
      <img
        src={Timeline}
        alt="Timeline"
        className="lg:width-100 width-5-of-5  mt-12 sm:mt-16 md:mt-22 lg:mt-0"
      />
    </div>
  )
}

export default AboutLeft
