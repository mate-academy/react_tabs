import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ index, item, tabIndex, activeTab }) => (
  <button
    type="button"
    onClick={() => activeTab(index)}
    className={`${tabIndex === index
      ? 'button button__active' : 'button'}`}
  >
    {item.title}
  </button>

);

Tab.propTypes = {
  tabIndex: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  activeTab: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default Tab;
