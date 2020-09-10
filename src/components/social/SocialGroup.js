import React from "react"
import { Github, Instagram, Twitter } from "@molecule-ui/icons"
import SocialItem from "./SocialItem"
const SocialGroup = () => {
  return (
    <div className="display-flex justify-space-between mt-24 lg:width-2-of-5   lg:mx-auto  ">
      <SocialItem Icon={Github} href="https://github.com/Rushil-Dhinoja" />
      <SocialItem
        Icon={Instagram}
        href="https://www.instagram.com/rushil_dhinoja/"
      />
      <SocialItem Icon={Twitter} href="https://twitter.com/Rushildhinoja2" />
    </div>
  )
}

export default SocialGroup
