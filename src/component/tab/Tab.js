import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ tab, onTabSelected }) => (
  <button
    type="button"
    onClick={onTabSelected}
    className="massive ui button"
  >
    {tab.title}
  </button>
);

Tab.propTypes = {
  tab: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  onTabSelected: PropTypes.func.isRequired,
};

export default Tab;
