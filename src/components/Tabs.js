import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ tabs, handleTabChange, currentTabId }) => (
  <div className="Tabs">
    {tabs.map((tab, index) => (
      <button
        type="button"
        key={tab.title}
        onClick={() => handleTabChange(index)}
      >
        {tab.title}
      </button>
    ))}

  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
  currentTabId: PropTypes.number.isRequired,
  handleTabChange: PropTypes.func.isRequired,
};

export default Tabs;
