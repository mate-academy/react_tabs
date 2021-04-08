import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import PropTypes from 'prop-types';

export const TabsList = ({ tabs, selectedTab, onSelectedTab }) => (
  <>
    <ul className="tabs-list">
      {tabs.map(tab => (
        <li key={uuidv4()}>
          <button
            type="button"
            className={selectedTab === tab.title
              ? 'tabs-list__item tabs-list__item--active'
              : 'tabs-list__item'}
            onClick={() => onSelectedTab(tab.title)}
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>
    <div className="tab-text">
      {tabs.find(tab => selectedTab === tab.title).content}
    </div>
  </>

);

TabsList.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  onSelectedTab: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
