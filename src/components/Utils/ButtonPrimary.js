import React from "react"

const ButtonPrimary = ({ children }) => {
  return (
    <button className="px-20 py-5 border-radius-10 outline-none border-width-0 bg-teal-500 font-white roboto-bold text-uppercase cursor-pointer transform hover:-translate-y-5 transition-duration-200 ">
      {children}
    </button>
  )
}

export default ButtonPrimary
