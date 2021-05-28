import React from 'react';
import PropTypes from 'prop-types';

import './Tabs.scss';

export const Tabs = ({ tabs, selectedTab, onChangeTab }) => (
  <div className="Tabs">
    <div className="Tabs__titles">
      {tabs.map(tab => (
        <button
          key={tab.id}
          type="button"
          className={`Tabs__title${selectedTab.id === tab.id
            ? ` Tabs__title--selected`
            : ''
          }`}
          onClick={() => {
            onChangeTab(tab);
          }}
        >
          {tab.title}
        </button>
      ))}
    </div>
    <p>{selectedTab.content}</p>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedTab: PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onChangeTab: PropTypes.func.isRequired,
};
