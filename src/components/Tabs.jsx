import React from 'react';
import PropTypes from 'prop-types';

function Tabs({ tabs, selectedTabId, onTabSelected }) {
  return (
    <>
      <ul className="tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            type="button"
            onClick={() =>{
              onTabSelected(tab.id)
            }}
          >
            {tab.title}
          </button>
        ))}
      </ul>
      <p>
        {tabs.find(tab => selectedTabId === tab.id).content}
      </p>
    </>
  )
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,
  selectedTabId: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};

export default Tabs;
