import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

const Tab = ({
  title,
  index,
  onTabSelected,
  i,
}) => (

  // eslint-disable-next-line max-len
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events
  <div
    className="tab"
    onClick={() => onTabSelected(i)}
  >
    <div
      className={i === index ? 'tab__title tab__title--active' : 'tab__title'}
    >
      {title}
    </div>
  </div>
);

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  i: PropTypes.number.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};

export default Tab;
