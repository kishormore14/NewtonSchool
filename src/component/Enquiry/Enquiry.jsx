import React, { useRef } from "react";
import Nav from "../Nav/Nav";
import "./Enquiry.css";
import emailjs from "@emailjs/browser";

const Enquiry = () => {
  const hhh = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // "service_3tmbomh",
        // "template_5zbkzs4",
        // hhh.current,
        // "7JPMrgU1LgbJoNtTT"
        "service_qjl2mut",
        "template_qio6jo5",
        hhh.current,
        "0WPLkRzWsOjuvMqB-"
      )
      .then(
        (result) => {
          alert("We will get Back to you soon");
        },
        (error) => {
          alert("Something is wrong");
        }
      );
    e.target.reset();
  };
  return (
    <>
      <Nav />
      <div id="main">
        <h3 id="h3">Enquiry Form</h3>
        <p>Please fill up the form below for product enquiries :</p>
        <form
          method="post"
          action=""
          id="form-enquiry"
          ref={hhh}
          onSubmit={sendEmail}
        >
          <div className="form-input-holder">
            <label for="full-name">Name : </label>
            <div className="input-text">
              <input
                type="text"
                id="full-name"
                className="form-input"
                name="full-name"
                required
              />
            </div>
          </div>
          <div className="form-input-holder">
            <label for="email">Email : </label>
            <div className="input-text">
              <input
                type="email"
                id="email"
                className="form-input"
                name="email"
                required
              />
            </div>
          </div>
          <div className="form-input-holder">
            <label for="phone">Telephone : </label>
            <div className="input-text">
              <input
                type="text"
                id="phone"
                className="form-input"
                name="phone"
                required
              />
            </div>
          </div>
          <div className="form-input-holder">
            <label for="description">Product Enquiry : </label>
            <div className="input-text">
              <textarea
                id="description  "
                name="description"
                className="form-input textarea"
              />
            </div>
          </div>
          <div className="form-input-holder">
            <input type="submit" value="Submit" id="form-button" />
            <span className="form-errors"></span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Enquiry;
