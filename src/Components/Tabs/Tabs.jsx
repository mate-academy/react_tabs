import React from 'react';
import './Tabs.css';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, selectedTabId, selectTabHandler }) => (
  <div className="Tabs">
    <ul className="Tabs__list">
      {tabs.map(tab => (
        <li
          key={tab.id}
          className={
            selectedTabId === tab.id
              ? 'Tab__item_active'
              : null
            }
        >
          <a
            href={tab.id}
            className="Tab__link"
            onClick={(event) => {
              event.preventDefault();

              selectTabHandler(tab.id);
            }}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>

    <div className="Tab__content">
      {tabs.find(tab => tab.id === selectedTabId).content}
    </div>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedTabId: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
};
