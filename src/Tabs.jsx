import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

const Tabs = ({ tabs, activeTabId, onTabSelected }) => (
  <div className="tabs">
    {tabs.map((tab, index) => (
      <button
        className={ClassNames(
          'tabs__button',
          { ' tabs__button--selected': activeTabId === index },
        )}
        type="button"
        key={tab.title}
        onClick={() => (
          onTabSelected(index))}
      >
        {tab.title}
      </button>
    ))}
    <p className="tabs__active">
      {tabs[activeTabId].content}
    </p>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.string.isRequired,
    ).isRequired,
  ).isRequired,
  activeTabId: PropTypes.number.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};

export default Tabs;
