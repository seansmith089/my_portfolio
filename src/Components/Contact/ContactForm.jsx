import useViewport from "../../CustomHooks/UseViewport";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import ReactWhatsapp from "react-whatsapp";
import { useNavigate } from "react-router";

import "./contactForm.css";
import { LuSendHorizonal } from "react-icons/lu";
import { BsWhatsapp, BsMessenger } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";

function ContactForm() {
  const { width, breakpoint_small } = useViewport();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate()

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          navigate("/thanks")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const openMailClient = () => {
    window.open("mailto:seansmith089@gmail.com");
  }

  return (
    <div className="form_wrapper">
      <form action="" className="form" ref={form} onSubmit={sendEmail}>
        <label htmlFor="name_input" className="name_label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name_input"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email_input" className="email_label">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email_input"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="message_input" className="message_label">
          Message
        </label>
        <textarea
          name="message"
          id="message_input"
          value={message}
          cols="30"
          rows="10"
          required
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button className="send_btn">
          Send Message
          <LuSendHorizonal className="send_icon" />
        </button>
      </form>

      <div className="icon_wrapper">
        <ReactWhatsapp
          className="whatsApp_launcher"
          number="+61475209641"
          message="Hi Sean, "
        >
          <div className="whatsapp_border">
            <BsWhatsapp className="whatsapp_icon" />
            <span className="icon_text">Whatsapp</span>
            {width > breakpoint_small && (
              <div className="message_me_wrapper">
                <p className="contact_details">+61 475 209 641</p>
                <p className="msg_me_txt">Message Me </p>
                <AiOutlineArrowRight className="arrow_styles whatsapp_arrow_pos" />
              </div>
            )}
          </div>
        </ReactWhatsapp>

        <div className="email_border" onClick={openMailClient}>
          <MdOutlineEmail className="email_icon" />
          <span className="icon_text">Email</span>
          {width > breakpoint_small && (
            <div className="message_me_wrapper">
              <p className="contact_details">seansmith089@gmail.com</p>
              <p className="msg_me_txt">Message Me </p>
              <AiOutlineArrowRight className="arrow_styles email_arrow_pos" />
            </div>
          )}
        </div>

        <div className="messenger_border">
          <BsMessenger className="messenger_icon" />
          <span className="icon_text">Messenger</span>
          {width > breakpoint_small && (
            <div className="message_me_wrapper">
              <p className="contact_details">/seansmith1989</p>
              <p className="msg_me_txt">Message Me </p>
              <AiOutlineArrowRight className="arrow_styles messenger_arrow_pos" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
