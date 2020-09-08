import React from "react"
import Brand from "./Brand"
import Menu from "./Menu"

const Navbar = () => {
  return (
    <div className="display-flex py-8 justify-space-between align-center">
      <Brand />
      <Menu />
    </div>
  )
}

export default Navbar
