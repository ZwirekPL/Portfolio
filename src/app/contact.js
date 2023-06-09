import useMediaQuery from "./hooks/useMediaQuery";
import styles from "./style/styles.module.css";
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

import Loader from "./loader";
import EmailResponse from "./emailResponse";

const Contact = ({ contactRef }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    if (emailSent) {
      const timeout = setTimeout(() => {
        setEmailSent(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [emailSent]);

  const handleChangeInput = (evt) => {
    const { name, value } = evt.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsLoading(!isLoading);
    emailjs
      .sendForm(
        "service_68yye0u",
        "template_ah03oau",
        e.target,
        "4Zcy7dLJxvPvP2HtJ"
      )
      .then((result) => {
        console.log("Email sent successfully!", result.text);
        setIsLoading(false);
        setEmailSent(true);
        setEmailError(false);
        clearForm();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setEmailSent(false);
        setEmailError(true);
      });
  };
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    const { name, email, message } = formData;
    let isValid = true;

    if (name.length < 3) {
      isValid = false;
    }

    if (!emailRegex.test(email)) {
      isValid = false;
    }

    if (message.length < 20 || message.length > 400) {
      isValid = false;
    }

    return isValid;
  };

  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <form
        ref={contactRef}
        onSubmit={handleEmailSubmit}
        className="flex flex-col justify-center items-start w-[80%] md:w-[730px] lg:w-[940px] xl:w-[940px] 2xl:w-[940px]  relative mb-20"
      >
        <h1 className="text-4xl font-semibold text-center p-2 md:mt-20 lg:mt-20 xl:mt-20 2xl:mt-20 ">
          Contact
        </h1>
        <input
          type="text"
          name="name"
          minLength={3}
          className={styles.contactFormInput}
          id="name"
          value={formData.name}
          required
          autoComplete="off"
          onChange={handleChangeInput}
        />
        <label htmlFor="name" className={styles.contactFormLabel}>
          <span className={styles.contactFormSpan}>Whats is your name?</span>
        </label>

        <input
          type="email"
          name="email"
          className={styles.contactFormInput}
          id="email"
          value={formData.email}
          required
          autoComplete="off"
          onChange={handleChangeInput}
        />
        <label htmlFor="email" className={styles.contactFormLabel}>
          <span className={styles.contactFormSpan}>Whats is your email?</span>
        </label>

        <textarea
          type="text"
          name="message"
          minLength={20}
          maxLength={400}
          className={styles.contactFormTextArea}
          id="message"
          value={formData.message}
          required
          autoComplete="off"
          onChange={handleChangeInput}
        />
        <label htmlFor="message" className={styles.contactFormLabel}>
          <span className={styles.contactFormSpan}>
            What would you like to tell me?
          </span>
        </label>

        <input
          type="submit"
          value="Send"
          disabled={isLoading}
          className={`text-2xl font-semibold p-2 m-5 rounded-md ${styles.navBtnSubmit}`}
        />
      </form>
      {isLoading && <Loader />}
      <EmailResponse success={emailSent} error={emailError} />
    </>
  );
};
export default Contact;
