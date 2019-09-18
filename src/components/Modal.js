import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ onClose, children }) => (
  <div className="modal">
    <button onClick={onClose}>Close</button>
    <div className="modal__content">{children}</div>
  </div>
);

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node
};

Modal.defaultProps = {
  children: null
};

export default Modal;
