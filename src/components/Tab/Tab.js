import React from 'react';
import './Tab.css';
import PropTypes from 'prop-types';

const Tab = ({ handleClick, title }) => (
  <button
    type="button"
    onClick={handleClick}
    className="button"
  >
    {title}
  </button>
);

Tab.propTypes = {
  handleClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Tab;
