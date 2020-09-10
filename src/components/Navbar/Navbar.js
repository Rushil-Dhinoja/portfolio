import React from "react"
import Brand from "./Brand"
import Menu from "./Menu"

const Navbar = () => {
  return (
    <div className="display-flex flex-column lg:flex-row md:flex-row py-8 justify-space-between align-center">
      <Brand />
      <Menu />
    </div>
  )
}

export default Navbar
