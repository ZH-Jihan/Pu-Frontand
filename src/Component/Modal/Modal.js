import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    console.log(isOpen);
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <span className="close" onClick={onClose}>&times;</span>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;