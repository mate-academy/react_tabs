import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';

const Tabs = ({ tabs, selectedTabId, onTabSelected }) => (
  <>
    <div className="tabs">
      {tabs.map(tab => (
        <button
          className="tabs-button"
          type="button"
          key={tab.id}
          onClick={() => (onTabSelected(tab))}
        >
          {tab.title}
        </button>
      ))}
    </div>

    <p className="tabs-info">
      {tabs.find(tab => tab.id === selectedTabId).content}
    </p>
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  selectedTabId: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};

export default Tabs;
