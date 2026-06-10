import React, { useState } from "react";
import "./Page.css";

export const Contact = () => {
  const [newValue, setNewValue] = useState(false);

  const [contactformdata, setContactformdata] = useState({
    fullname: "",
    courses: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContactformdata({
      ...contactformdata,
      [name]: value,
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(contactformdata);
  };
  console.log(newValue);

  const PostData = async (e) => {
    e.preventDefault();

    const { fullname, email, phone, courses, message } = contactformdata;

    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        phone,
        courses,
        message
      })
    });
    const data = await res.json();
    
    if (data.status === 422 || !data){
      window.alert("Invalid Data")
     console.log("Invalid Data");
    }
    else {
      window.alert("Registration SuccessfUll")
     console.log("Registration SuccessfUll");
    }
  };

  return (
    <>
      <section className="contact-container">
        <div className="container-form">
          <div className="main-content">
            <h2 className="contact-title">Contact Form</h2>
            {/* <p>{contactformdata}</p> */}
            <p>Fill out the form below, we will get back you soon.</p>

            <form onSubmit={formSubmit} method="POST">
              <div className="contact-form">
                <div className="contact-input">
                  <span>
                    Full Name <label>*</label>
                  </span>
                  <input
                    type="text"
                    name="fullname"
                    autoComplete="off"
                    value={contactformdata.fullname}
                    onChange={handleInputs}
                    required
                  />
                </div>

                <div className="contact-input">
                  <span>
                    Phone Number <label>*</label>
                  </span>
                  <input
                    type="number"
                    name="phone"
                    autoComplete="off"
                    value={contactformdata.phone}
                    onChange={handleInputs}
                  />
                </div>
                <div className="contact-input">
                  <span>
                    Email <label>*</label>
                  </span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="off"
                    value={contactformdata.email}
                    onChange={handleInputs}
                    required
                  />
                </div>

                <div className="contact-input">
                  <span>Your Course</span>
                  <input
                    type="text"
                    name="courses"
                    autoComplete="off"
                    value={contactformdata.courses}
                    onChange={handleInputs}
                  />
                </div>
              </div>
              <div className="contact-input">
                <span>
                  <label>Write Your Message</label>
                </span>
                <textarea
                  rows="3"
                  name="message"
                  autoComplete="off"
                  value={contactformdata.message}
                  onChange={handleInputs}
                ></textarea>
              </div>
              <button className="primary-btn" onClick={PostData}>
                Submit Now
              </button>
            </form>
          </div>
        </div>

        <div className="side-content">
          <h2>Visit our location</h2>
          <div className="contact-add">
            <div className="contactcont-area">
              <p>
                <i className="fa fa-map-marker-alt"></i>B, Shivam Appartment,
                near Moti Dungri police Station, Anand Puri, Bees Dukan, Adarsh
                Nagar, Jaipur, Rajasthan 302004
              </p>
            </div>
            <h2>Message us</h2>
            <div className="contactcont-area">
              <span className="">
                <i className="fa fa-envelope"></i>admin@collezers.com
              </span>
            </div>
            <div className="contactcont-area">
              <span>
                <i className="fa fa-phone"></i>+91 925-158-6070
              </span>
            </div>
            <h2>Follow Us</h2>

            <div className="">
              <div className="icon">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-youtube"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
