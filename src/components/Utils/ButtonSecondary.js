import React from "react"

const ButtonSecondary = ({ children, variant, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`py-4 border-radius-999 font-white border-width-2 border-solid font-button roboto-bold text-uppercase cursor-pointer transform hover:-translate-y-5 transition-duration-200 text-decoration-none ${
        variant === "solid" ? "bg-teal-500 border-transparent px-16 " : ""
      } ${
        variant === "outline" ? " border-white  bg-transparent px-12 " : ""
      } `}
    >
      {children}
    </a>
  )
}

export default ButtonSecondary
