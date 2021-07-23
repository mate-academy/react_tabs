import React from 'react';
import PropTypes from 'prop-types';
import './TitleButton.scss';

const TitleButton = ({ onClick, className, selectedTabId, title }) => (
  <div className="btnList">
    <button
      className={className}
      type="button"
      onClick={(event) => {
        onClick(selectedTabId);
      }}
    >
      {title}
    </button>
  </div>

);

TitleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  selectedTabId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TitleButton;
