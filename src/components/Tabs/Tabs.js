import React from 'react';
import PropTypes from 'prop-types';

import './Tabs.scss';

export function Tabs({ tabs, onTabSelected, selectedTabId }) {
  return (
    <>
      {tabs.map(tab => (
        <button
          type="button"
          key={tab.id}
          onClick={() => onTabSelected(tab.id)}
          className={tab.id === selectedTabId
            ? 'button button_active'
            : 'button'}
        >
          {tab.title}
        </button>
      ))}

      <div className="Tabs_content">
        <p className="Tabs_text">
          {tabs.find(tab => tab.id === selectedTabId).content}
        </p>
        <img
          src={tabs.find(tab => tab.id === selectedTabId).picture}
          className="Tabs_img"
          alt="dinosour"
        />
      </div>
    </>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onTabSelected: PropTypes.func.isRequired,
  selectedTabId: PropTypes.string.isRequired,
};
