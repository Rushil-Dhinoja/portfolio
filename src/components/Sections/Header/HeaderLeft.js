import React from "react"
import HeadingOne from "../../Utils/HeadingOne"
import ButtonPrimary from "../../Utils/ButtonPrimary"

const HeaderLeft = () => {
  return (
    <div className="lg:width-50 md:width-4-of-5 sm:width-100 pt-40">
      <HeadingOne>Hello, I'm Rushil</HeadingOne>
      <p className="lg:width-3-of-5 width-100 font-h6 roboto-regular line-height-5 mt-8 mb-12  font-gray-300 ">
        Full-stack web developer from Junagadh, India. I create web apps and
        custom landing pages. If you are looking to build an online presence or
        hire you can contact me here.
      </p>
      <ButtonPrimary>My Projects</ButtonPrimary>
    </div>
  )
}

export default HeaderLeft
