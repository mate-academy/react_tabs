import React from 'react';
import PropTypes from 'prop-types';
import './Tab.scss';

const Tab = ({
  isActiveTab, index, title, handleClick,
}) => (
  <button
    type="button"
    onClick={handleClick}
    className={
      isActiveTab === index
        ? 'button button--active'
        : 'button'
    }
  >
    {title}
  </button>
);

Tab.propTypes = ({
  handleClick: PropTypes.func,
  title: PropTypes.string,
  isActiveTab: PropTypes.number,
  index: PropTypes.number,
}).isRequired;

export default Tab;
