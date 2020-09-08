import React from "react"
import Brand from "../Navbar/Brand"

const Footer = () => {
  return (
    <div className="width-100 display-flex align-items-center justify-center">
      <div className="">
        <Brand />
        <p className="font-teal-500 text-center mt-8 font-caption">
          Copyright &copy; 2020, Rushil Dhinoja
        </p>
      </div>
    </div>
  )
}

export default Footer
