import React from "react"
import MenuItem from "./MenuItem"

const Menu = () => {
  return (
    <ul className="display-flex spacing-x-6 list-none font-subtitle font-white roboto-regular">
      <MenuItem href="#about">About</MenuItem>
      <MenuItem href="#projects">Projects</MenuItem>
      <MenuItem href="#contact">Contact</MenuItem>
    </ul>
  )
}

export default Menu
