import React from 'react';
import PropTypes from 'prop-types';
import './tab.css';

const Tab = ({ tabs, state }) => (
  <div className="content">
    { tabs[state].content }
  </div>
);

Tab.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    }),
  ).isRequired,
  state: PropTypes.number.isRequired,
};

export default Tab;
