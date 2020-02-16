import React from 'react';
import PropTypes from 'prop-types';
import './Tab.css';

export const Tab = ({ state, tabs }) => (
  <div className="content">
    {tabs[state].content}
  </div>
);

Tab.propTypes = {
  state: PropTypes.number.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string,
  })).isRequired,
};
