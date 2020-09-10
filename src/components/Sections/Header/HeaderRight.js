import React from "react"
import HeroImg from "../../../assets/HeroImage.png"
const HeaderRight = () => {
  return (
    <div className="width-50  lg:display-flex md:display-none display-none  sm:display-none align-center justify-center ">
      <div className="bg-secondary border-radius-12 shadow-custom-1">
        <div>
          <img src={HeroImg} alt="Rushil Dhinoja" className="image-shadow" />
        </div>
      </div>
    </div>
  )
}

export default HeaderRight
