import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.scss';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
  selectedTabContent,
}) => (
  <div className="tabs">
    <ul className="tabs__list">
      {tabs.map(tab => (
        <li key={tab.id} className="tabs__item">
          <button
            type='button'
            className={
              `tabs__btn ${tab.id !== selectedTabId
                ? 'tabs__btn--active'
                : ''}`
            }
            onClick={() => onTabSelected(tab)}
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>
    <p className="tabs__content">
      {selectedTabContent}
    </p>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  selectedTabId: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
  selectedTabContent: PropTypes.string.isRequired,
};
