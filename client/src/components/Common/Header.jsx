import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';


export const Header = () => {
  return (
    <div className="head-container">
      <div id="topbar" className="topbar">
        <div className='row'>
          <ul className="left-info">
            <li><Link className='topbar-item' to='https://mail.google.com/mail/u/0/#inbox?compose=new'><i className="fa fa-envelope">info@collezers.com</i></Link></li>
            <li><Link className='topbar-item' to='/'><i className="fa fa-phone">+91 998-877-6655</i></Link></li>
          </ul>
          <ul className="right-icon">
            <li><Link className='topbar-item' to='/'><i className="fa-brands fa-facebook-f"></i></Link></li>
            <li><Link className='topbar-item' to='/'><i className="fa-brands fa-instagram"></i></Link></li>
            <li><Link className='topbar-item' to='/'><i className="fa-brands fa-linkedin"></i></Link></li>
            <li><Link className='topbar-item' to='/'><i className="fa-brands fa-youtube"></i></Link></li>
          </ul>
        </div>
      </div>
      <Navbar />
    </div>
  )
}
