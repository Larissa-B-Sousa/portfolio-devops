import React from 'react';
import './Modal.css';
import Modal from "react-modal";


const Modal = ({ isOpen, onClose, children }) => (
  isOpen ? (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose}>Fechar</button>
        {children}
      </div>
    </div>
  ) : null
);

export default Modal;
