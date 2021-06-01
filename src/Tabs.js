import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Tabs = ({ tabs, onTabSelected, selectedTab }) => (
  <div className="tabs">
    {tabs.map(tab => (
      <button
        className={classNames('tab__title', {
          active: tab.id === selectedTab,
        })}
        type="button"
        key={tab.id}
        onClick={() => onTabSelected(tab.id)}
      >
        {tab.title}
      </button>
    ))
    }
    <p>{tabs.find(tab => selectedTab === tab.id).content}</p>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedTab: PropTypes.string.isRequired.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};

export default Tabs;
