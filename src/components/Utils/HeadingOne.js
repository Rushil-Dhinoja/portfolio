import React from "react"

const HeadingOne = ({ children }) => {
  return (
    <h1 className="font-h1 font-teal-500 roboto-light letter-space-custom-h1 heading-one position-relative">
      {children}
    </h1>
  )
}

export default HeadingOne
