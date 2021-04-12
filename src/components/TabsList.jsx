import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const TabsList = ({ tabs, selectedTab, onSelectedTab }) => (
  <>
    <ul className="tabs-list">
      {tabs.map(tab => (
        <li key={tab.id}>
          <button
            type="button"
            className={classNames('tabs-list__item',
              { 'tabs-list__item--active': selectedTab === tab.title })}
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

const TabType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}).isRequired;

TabsList.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  onSelectedTab: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(
    TabType,
  ).isRequired,
};
