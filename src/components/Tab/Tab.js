import React from 'react';
import PropTypes from 'prop-types';
import './Tab.css';

const Tab = ({
  isActiveTab, index, title, handleClick,
}) => (
  <button
    type="button"
    onClick={handleClick}
    className={
      isActiveTab === index
        ? 'button active'
        : 'button'
    }
  >
    {title}
  </button>
);

Tab.propTypes = ({
  title: PropTypes.string,
  isActiveTab: PropTypes.number,
  index: PropTypes.number,
  handleClick: PropTypes.func,
}).isRequired;

export default Tab;
