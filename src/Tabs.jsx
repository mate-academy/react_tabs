import React from 'react';
import PropTypes from 'prop-types';

function Tabs(props) {
  const { tabs, selectedTabId, onTabSelected } = props;

  return (
    <>
      <ul>
        {tabs.map(tab => (
          <button
            id={tab.title}
            type="button"
            onClick={() => onTabSelected(tab)}
          >
            {tab.title}
          </button>
        ))}
      </ul>
      <div>
        {tabs.find(tab => tab.id === selectedTabId).content}
      </div>
    </>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedTabId: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};

export default Tabs;
