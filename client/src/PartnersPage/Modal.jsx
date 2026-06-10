import React, { useState } from "react";
import "./Modal.css"; // Import your CSS file for styling

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <button className="close-btn" onClick={onClose}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
