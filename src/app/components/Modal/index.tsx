import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

const Modal = ({ visible, toggle, children, title }) => {
  return visible
    ? ReactDOM.createPortal(
        <div className="modal">
          <div className="modal-pop" role="dialog" aria-modal="true">
            <h1 className="title">{title}</h1>
            {children}
          </div>
          <div className="modal-overlay"></div>
        </div>,
        document.getElementById('app-portals')!,
      )
    : null;
};

export default Modal;
