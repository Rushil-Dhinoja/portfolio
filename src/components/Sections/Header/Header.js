import React from "react"
import HeaderLeft from "./HeaderLeft"
import HeaderRight from "./HeaderRight"

const Header = () => {
  return (
    <div>
      <div className="display-flex pt-custom-20 ">
        <HeaderLeft />
        <HeaderRight />
      </div>
    </div>
  )
}

export default Header
