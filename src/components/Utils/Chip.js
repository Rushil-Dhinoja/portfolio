import React from "react"

const Chip = ({ children }) => {
  return (
    <div className="roboto-regular font-teal-500 width-100-px text-center border-width-2 border-teal-500 border-solid border-radius-999 font-note py-2 line-height-5 mt-2">
      <p className="pt-1 text-uppercase">{children}</p>
    </div>
  )
}

export default Chip
