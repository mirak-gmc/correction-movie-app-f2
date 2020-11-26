import React from "react";
import "./Modal.css";

function Modal({ closeModal, isOpen, children }) {
  return (
    isOpen && (
      <div onClick={closeModal} className="modal-container">
        <div className="modal-body" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    )
  );
}

export default Modal;
