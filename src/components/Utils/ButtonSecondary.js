import React from "react"

const ButtonSecondary = ({ children, variant }) => {
  return (
    <button
      className={`py-4 border-radius-999 outline-none font-white border-width-2   roboto-bold text-uppercase cursor-pointer transform hover:-translate-y-5 transition-duration-200 ${
        variant === "solid" ? "bg-teal-500 border-transparent px-16 " : ""
      } ${
        variant === "outline" ? " border-white  bg-transparent px-12 " : ""
      } `}
    >
      {children}
    </button>
  )
}

export default ButtonSecondary
