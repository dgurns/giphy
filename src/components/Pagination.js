import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ currentPage, onPageForward, onPageBack }) => (
  <div className="pagination">
    <div className="pagination__button">
      {currentPage > 1 && <button onClick={onPageBack}>{'<'}</button>}
    </div>
    <span className="pagination__label">Page {currentPage}</span>
    <div className="pagination__button">
      <button onClick={onPageForward}>{'>'}</button>
    </div>
  </div>
);

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  onPageForward: PropTypes.func.isRequired,
  onPageBack: PropTypes.func.isRequired
};

export default Pagination;
