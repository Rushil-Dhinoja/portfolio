import React from "react"
import MenuItem from "./MenuItem"

const Menu = () => {
  return (
    <ul className="display-flex spacing-x-6 list-none md:mt-0 sm:align-items-center sm:justify-center font-subtitle font-white roboto-regular sm:mt-12">
      <MenuItem href="#about">About</MenuItem>
      <MenuItem href="#projects">Projects</MenuItem>
      <MenuItem href="#contact">Contact</MenuItem>
    </ul>
  )
}

export default Menu
