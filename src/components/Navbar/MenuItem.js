import React from "react"

const MenuItem = ({ children, href }) => {
  return (
    <li className="cursor-pointer">
      <a
        href={href}
        className="text-decoration-none font-white hover:font-gray-300 transition-duration-100 "
      >
        {children}
      </a>
    </li>
  )
}

export default MenuItem
