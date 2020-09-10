import React from "react"

const ContactForm = () => {
  return (
    <form
      className="display-flex flex-column spacing-y-2 mt-24 width-2-of-5"
      method="post"
      data-netlify="true"
    >
      <input
        type="text"
        placeholder="Name"
        className="py-8 pl-16 border-radius-12 outline-none bg-secondary placeholder-teal-500 font-body placeholder-opacity-6 font-teal-500 border-width-1 border-solid border-transparent  focus-border-teal-500  "
        name="Name"
      />
      <input
        type="email"
        placeholder="Email"
        className="py-8 pl-16 border-radius-12 outline-none  bg-secondary placeholder-teal-500 font-body placeholder-opacity-6 font-teal-500 border-width-1 border-solid border-transparent  focus-border-teal-500"
        name="email"
      />
      <textarea
        rows="8"
        className="py-8 pl-16 border-radius-12 outline-none roboto-regular bg-secondary placeholder-teal-500 font-body placeholder-opacity-6 font-teal-500 border-width-1 border-solid border-transparent  focus-border-teal-500"
        placeholder="Message"
        name="message"
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
