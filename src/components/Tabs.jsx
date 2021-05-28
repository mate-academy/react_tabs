import React from 'react';
import PropTypes from 'prop-types';

function Tabs({ tabs, selectedTab, onTabSelected }) {
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
        {selectedTab.content}
      </p>
    </>
  )
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,
  onTabSelected: PropTypes.func.isRequired,
  selectedTab: PropTypes.shape({
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Tabs;
