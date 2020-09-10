import React from "react"
import HeadingTwo from "../../Utils/HeadingTwo"
import ContactForm from "./ContactForm"

const Contact = () => {
  return (
    <div id="contact">
      <HeadingTwo>Contact</HeadingTwo>
      <div className="display-flex flex-column align-items-center justify-center">
        <p className="font-gray-300 font-h4">
          If you want to talk, you can find me here
        </p>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact
