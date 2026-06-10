import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./Footer.css";
import { Link } from "react-router-dom";
import footerImg from "../../assets/CK.png";
export const Footer = () => {
  const [show, setShow] = useState(false);
  const [newValue, setNewValue] = useState(false);

  const handleClose = () => setShow(false);
  const [newsletter, setNewsletter] = useState({
    fullname: "",
    email: "",
    phone: "",
    courses: "",
  });

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setNewsletter({
      ...newsletter,
      [name]: value,
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(newsletter);
  };
  console.log(newValue);

  const newsletterform = async (e) => {
    e.preventDefault();
    const { fullname, email, phone, courses } = newsletter;

    const res = await fetch("/footer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        phone,
        courses,
      })
    });
    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Invalid Data")
      console.log("Invalid Data");
    }
    else {
      window.alert("Registration Successfll")
      console.log("Registration Successfll");
    }
  };
  return (
    <>
      <footer className="footer">
        <section className="footer-top ">
          <div className="contact-area">
            <div className="footer-form">
              <h2 className="footer-title">Subscribe To Our News Letter</h2>
              <p className="footer-subtitle">
                Get College Notifications, Exam Notifications and News Updates
              </p>

              <form
                method="POST"
                name="sentMessage"
                id="contactForm"
                onSubmit={formSubmit}
              >
                <div className="contact-footer-subscribe">
                  <div className="field">
                    <input
                      type="name"
                      placeholder="Enter Full Name"
                      name="fullname"
                      autoComplete="off"
                      value={newsletter.fullname}
                      onChange={handleInputs}
                    />
                  </div>{" "}
                  <div className="field">
                    <input
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      autoComplete="off"
                      value={newsletter.email}
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="field">
                    <input
                      type="phone"
                      placeholder="Enter Mobile Number"
                      name="phone"
                      autoComplete="off"
                      value={newsletter.phone}
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="field">
                    <input
                      type="courses"
                      placeholder="Choose Your Courses"
                      name="courses"
                      autoComplete="off"
                      value={newsletter.courses}
                      onChange={handleInputs}
                    />
                  </div>
                  <button
                    className="newsletter-button"
                    type="submit" onClick={newsletterform}
                  >
                    <i className="fas fa-paper-plane">Submit</i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <div className="footer-area ">
          <div className="container">
            <div className="footer-main ">
              <div className="grid">
                <div className="footer-widget ">
                  <div className="footer-img">
                    <Link to="/">
                      <img src={footerImg} alt="footer-logo" />
                    </Link>

                    <div className="footer-icon">
                      <li>
                        <Link className="footer-item" to="/">
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link className="footer-item" to="/">
                          <i className="fa-brands fa-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link className="footer-item" to="/">
                          <i className="fa-brands fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link className="footer-item" to="/">
                          <i className="fa-brands fa-youtube"></i>
                        </Link>
                      </li>
                    </div>
                  </div>
                </div>

                <div className="footer-widget">
                  <h3>Online and Distance UG Courses</h3>
                  <ul>
                    <li>
                      <a href="#">Online BBA</a>
                    </li>
                    <li>
                      <a href="#">Online BCOM</a>
                    </li>
                    <li>
                      <a href="#">Online BA</a>
                    </li>
                    <li>
                      <a href="#">Online BA Hons</a>
                    </li>
                    <li>
                      <a href="#">Online BA JMC Honours</a>
                    </li>
                    <li>
                      <a href="#">Online BCA</a>
                    </li>
                    <li>
                      <a href="#">Distance BBA</a>
                    </li>
                    <li>
                      <a href="#">Distance BA</a>
                    </li>
                    <li>
                      <a href="#">Distance BCA</a>
                    </li>
                    <li>
                      <a href="#">Distance BA Honours</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-widget">
                  <h3>Online and Distance PG Courses</h3>
                  <ul>
                    <li>
                      <a href="#">Online MBA</a>
                    </li>
                    <li>
                      <a href="#">Online MCOM</a>
                    </li>
                    <li>
                      <a href="#">Online MA</a>
                    </li>
                    <li>
                      <a href="#">Online MA Hons</a>
                    </li>
                    <li>
                      <a href="#">Online MCA</a>
                    </li>
                    <li>
                      <a href="#">Online MSC</a>
                    </li>
                    <li>
                      <a href="#">Distance MBA</a>
                    </li>
                    <li>
                      <a href="#">Distance MCOM</a>
                    </li>
                    <li>
                      <a href="#">Distance MA</a>
                    </li>
                    <li>
                      <a href="#">Distance MA Honours</a>
                    </li>
                    <li>
                      <a href="#">Distance MSC</a>
                    </li>
                    <li>
                      <a href="#">Distance MCA</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-widget">
                  <h3>Diploma Courses</h3>
                  <ul>
                    <li>
                      <a href="#">Digital Marketing</a>
                    </li>
                    <li>
                      <a href="#">Hospital and Healthcare</a>
                    </li>
                    <li>
                      <a href="#">Business Analytics</a>
                    </li>
                    <li>
                      <a href="#">Hospital Administration</a>
                    </li>
                    <li>
                      <a href="#">Banking and Finance</a>
                    </li>
                    <li>
                      <a href="#">Banking and Finance</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-widget">
                  <h3>Certification Courses</h3>
                  <ul>
                    <li>
                      <a href="#">Digital Marketing</a>
                    </li>
                    <li>
                      <a href="#">Hospital and Healthcare</a>
                    </li>
                    <li>
                      <a href="#">Business Analytics with Excel</a>
                    </li>
                    <li>
                      <a href="#">Technological Banking and Finance</a>
                    </li>
                    <li>
                      <a href="#">Hospital Administration</a>
                    </li>
                    <li>
                      <a href="#">Debt and Money Market</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-widget">
                  <h3>Useful Links</h3>
                  <ul>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/about">Our Mission</Link>
                    </li>
                    {/* <li><a href="/footer">Contact Us</a></li> */}
                  </ul>
                </div>

                <div className="footer-widget">
                  <h3>Contact Us</h3>
                  <ul>
                    <li>
                      <a href="tel:(555)674890556">
                        <i className="fas fa-phone"></i>+91 925-158-6070
                      </a>
                    </li>
                    <li>
                   
                      <a href="mailto:info@example.com">
                        <i className="fa fa-envelope"></i>info@collegekey.com
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@example.com">
                        <i className="fa fa-envelope"></i>admissions@collegekey.com
                      </a>
                    </li>
                    {/* <li>
                      <a href="">
                        <i className="fa fa-map-marker-alt"></i>B, Shivam
                        Appartment, near Moti Dungri police Station, Anand Puri,
                        Bees Dukan, Adarsh Nagar, Jaipur, Rajasthan 302004
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Modal
          show={show}
          onHide={handleClose}
          animation={false}
          className="show-data"
        >
          <Modal.Header closeButton>
            <Modal.Title>Thank You! </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <>
              <div className="sign-box">
                <h1>Welcome!</h1>
                <h3>
                  Full Name : <p>{newsletter.fullname}</p>
                </h3>

                <h3>
                  Contact Number : <p>{newsletter.phone}</p>
                </h3>
                <h3>
                  Email : <p>{newsletter.email}</p>
                </h3>
                <h3>
                  Courses : <p>{newsletter.courses}</p>
                </h3>
              </div>
            </>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </footer >
    </>
  );
};
