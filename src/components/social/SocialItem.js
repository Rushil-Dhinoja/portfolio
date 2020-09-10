import React from "react"

const SocialItem = ({ Icon, href }) => {
  return (
    <div className="p-6 border-width-2 border-teal-500 border-solid border-radius-999 cursor-pointer ">
      <a href={href} target="_blank" rel="noreferrer">
        <Icon fill="#02C39A" className="icons" size="huge" />{" "}
      </a>
    </div>
  )
}

export default SocialItem
