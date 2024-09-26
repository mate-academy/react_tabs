import React from 'react';

import PropTypes from 'prop-types';

const Tabs = function({ tabs, selectTab, selectedTabId }) {
  return (
    <>
      {tabs.map(tab => (
        <button
          type="button"
          key={tab.id}
          onClick={() => selectTab(tab)}
        >
          {tab.title}
        </button>
      ))}

      {tabs.map((tab) => {
        if (selectedTabId === tab.id) {
          return (
            <p key={tab.id}>{tab.content}</p>
          );
        }

        return false;
      })}
    </>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectTab: PropTypes.func.isRequired,
  selectedTabId: PropTypes.string.isRequired,
};

export default Tabs;
