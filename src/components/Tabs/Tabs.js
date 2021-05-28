import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Tabs.scss';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => (
  <>
    <div className="tabs__container">
      {tabs.map(tab => (
        <ul
          className="tabs__section"
          key={tab.id}
        >
          <li>
            <button
              type="button"
              className={classNames('tabs', {
                tabs__selected: tab.id === selectedTab.id,
              })}
              onClick={() => onTabSelected(tab)}
            >
              {tab.title}
            </button>
          </li>
        </ul>
      ))}
      <hr />
      <div>{tabs.find(tab => tab.id === selectedTab.id).content}</div>
    </div>
  </>
);

export default Tabs;

const TabTypes = PropTypes.shape({
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
});

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(TabTypes).isRequired,
  selectedTab: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
