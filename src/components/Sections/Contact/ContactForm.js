import React from "react"

const ContactForm = () => {
  return (
    <form
      name="contact"
      className="display-flex flex-column spacing-y-2 width-4-of-5 mt-24 lg:width-2-of-5"
      method="POST"
      data-netlify="true"
    >
      <input
        type="text"
        placeholder="Name"
        id="name"
        disabled="true"
        className="py-8 lg:px-16 border-radius-12 outline-none bg-secondary placeholder-teal-500 font-body placeholder-opacity-6 font-teal-500 border-width-1 border-solid border-transparent  focus-border-teal-500 display-none "
        name="netlify"
      />
      <input
        type="text"
        placeholder="Name"
        id="name"
        className="py-8 px-6 sm:px-8 md:px-14 lg:px-16 border-radius-12 outline-none bg-secondary placeholder-teal-500 font-body placeholder-opacity-6 font-teal-500 border-width-1 border-solid border-transparent  focus-border-teal-500  "
        name="Name"
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        id="email"
        className="py-8 px-6 sm:px-8 md:px-14 lg:px-16 border-radius-12 outline-none  bg-secondary placeholder-teal-500 font-body placeholder-opacity-6 font-teal-500 border-width-1 border-solid border-transparent  focus-border-teal-500 "
      />
      <textarea
        rows="8"
        className="py-8 px-6 sm:px-8 md:px-14 lg:px-16 border-radius-12 outline-none roboto-regular bg-secondary placeholder-teal-500 font-body placeholder-opacity-6 font-teal-500 border-width-1 border-solid border-transparent  focus-border-teal-500"
        placeholder="Message"
        name="message"
        id="message"
      ></textarea>
      <button
        type="submit"
        className="align-self-center mt-8 px-20 py-5 border-radius-10 outline-none border-width-0 bg-teal-500 font-white roboto-bold text-uppercase cursor-pointer transform hover:-translate-y-5 transition-duration-200"
      >
        send
      </button>
    </form>
  )
}

export default ContactForm
