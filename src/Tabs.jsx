import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, onChangeBtn, selectedTabId }) => {
  const selectedTab = tabs.find(tab => selectedTabId === tab.id);

  return (
    <div>
      { tabs.map(tab => (
        <button
          type="button"
          key={tab.id}
          onClick={() => {
            onChangeBtn(tab);
          }}
        >
          {tab.title}
        </button>
      ))}
      <div>{ selectedTab.content }</div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedTabId: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  onChangeBtn: PropTypes.func.isRequired,
};
