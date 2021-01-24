import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, activeTab, onTabSelected }) => (
  <>
    <div>
      {tabs.map(tab => (
        <button
          key={tab.title}
          type="button"
          className="Tabs__button"
          onClick={() => onTabSelected(tab)}
        >
          {tab.title}
        </button>
      ))}
    </div>

    <div>
      {tabs
        .filter((tab, index) => activeTab === index)
        .map(tab => (
          <p key={tab.title}>
            {tab.content}
          </p>
        ))
      }
    </div>
  </>
);

Tabs.propTypes = {
  activeTab: PropTypes.number.isRequired,
  onTabSelected: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
