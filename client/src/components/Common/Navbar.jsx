import React, { useState, useEffect } from "react";
import { EnquiryModal } from "./EnquiryModal";
import "./Navbar.css";
import img1 from "../../assets/collegerslogo.png";

import { Link } from "react-router-dom";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);

  // show modal in 1 sec after mounted
  useEffect(() => {
    // Set a time delay of 3 seconds (3000 milliseconds)
    const delay = 10000;

    // After the delay, show the modal
    const timeoutId = setTimeout(() => {
      setShowModal(true);
    }, delay);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <nav>
        <div className="navbar-brand">
          <Link to="/">
            <img className="img-fluid" src={img1} alt="" />
          </Link>
          <p>Learning Has Boundless Possibilities</p>
        </div>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <Link className="nav-item" to="/">
              Home
            </Link>
          </li>

          <li>
            <Link className="nav-item" to="/about">
              About
            </Link>
          </li>
          {/* <li>
                        <Link className='nav-item' to="/mission">Our Mission</Link>
                    </li> */}
          <li>
            <Link className="nav-item" to="/exploreprograms">
              Explore Programs
            </Link>
          </li>

          <li>
            <Link className="nav-item" to="/contact">
              Contact
            </Link>
          </li>

          <button
            href={{}}
            className="nav-btn"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Need Counselling
          </button>
          {showModal && <EnquiryModal closeModal={closeModal} open={open} />}
        </ul>
      </nav>
    </div>
  );
};
