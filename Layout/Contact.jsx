import { useState } from "react";
import contactStyles from "./LayoutStyles/ContactStyles";
import reusableStyles from "./LayoutStyles/ReusabelStyles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import data from "../CMS/Data/data.json";
import ProfileItem from "../components/ProfileItems";

export default function Contact() {
  const commonStyles = reusableStyles();
  const styles = contactStyles();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onDataChange = (e) => {
    setFormData((currentFormData) => ({
      ...currentFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const onSend = async () => {
    if (
      formData.email === "" ||
      formData.message === "" ||
      formData.name === ""
    ) {
      return toast("please fill all fields before sending");
    }

    try {
      await axios.post(
        "https://api.airtable.com/v0/appHh8OAtLNrXspMI/Enquiry",
        { fields: formData },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_MY_AIRTABLE_API}`,
          },
        }
      );
      setFormData({ name: "", email: "", message: "" });
      toast("contact request sent");
    } catch (error) {
      toast(error.message);
      setFormData({ name: "", email: "", message: "" });
    }
  };
  const userInfo = data.info;

  return (
    <div className={commonStyles.wrapperWithMargin}>
      <h2 className={styles.heading}>Contact</h2>
      <div className={styles.contactForm}>
        <div className={styles.formItem}>
          <label>name</label>
          <input
            name="name"
            onChange={onDataChange}
            value={formData.name}
            type="text"
          />
        </div>
        <div className={styles.formItem}>
          <label>email</label>
          <input
            onChange={onDataChange}
            name="email"
            value={formData.email}
            type="text"
          />
        </div>
        <div className={styles.formItem}>
          <label>message</label>
          <textarea
            onChange={onDataChange}
            name="message"
            value={formData.message}
            rows={6}
          />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={onSend} className={styles.sendButton}>
          send
        </button>
        <ToastContainer hideProgressBar={true} limit={1} />
      </div>
      <div className={styles.contactDetails}>
        <div>dhinoja.rushil17@gmail.com</div>
        <div>+91 7016613715</div>
      </div>
      <div className={styles.linksContainer}>
        {userInfo.links.map((link, index) => (
          <ProfileItem data={link} key={index} />
        ))}
      </div>
    </div>
  );
}
