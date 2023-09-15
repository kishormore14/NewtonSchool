import React from "react";
import "./Contact.css";
import Nav from "../Nav/Nav";
const Contact = () => {
  return (
    <>
      <Nav />
      <div className="containr">
        <div className="page-holder">
          <div className="contact-left">
            <div itemscope className="contact-data">
              <h3 id="h3">Contact Us</h3>
              <br />
              <br />
              <strong>
                <span itemprop="name">Registered Office:</span>
              </strong>
              <div itemprop="address" itemscope>
                <address id="address">
                  <span itemprop="streetAddress">
                    Pune Swarget,KK Market.
                    <br />.
                    <br />
                    Pune Swarget,KK Market.
                    <br /> – 485652. ,
                  </span>
                  <br />
                  <span itemprop="addressLocality">
                    MAHARASHTRA. <br />
                    INDIA
                    <br />
                  </span>
                </address>
                {/*  */}
                <strong>
                  <span itemprop="name">Residential Office:</span>
                </strong>
                <address id="address">
                  <span itemprop="streetAddress">
                    Pune Swarget,KK Market.
                    <br />
                    Market – 78 95.
                  </span>
                  <br />
                  <span itemprop="addressLocality">
                    India
                    <br />
                  </span>
                </address>
              </div>
              Mobile No:
              <span itemprop="telephone"> 7758041887</span>
              <br />
              E-mail :
              <span itemprop="email">
                <a
                  href="morekishor3008@gmail.com

"
                >
                  morekishor3008@gmail.com
                </a>
              </span>
            </div>
          </div>
          <div className="contact-right">
            <div className="contact-data2">
              {/* <iframe
                is="iframe"
                src=""
                width="100%"
                height="400"
                frameborder="0"
              ></iframe> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15134.364379526593!2d73.8534752508814!3d18.502172171402385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c014271918c5%3A0xfa3ce63f0c494d3f!2sSwargate%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1694584496519!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{border:0}}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Contact;
