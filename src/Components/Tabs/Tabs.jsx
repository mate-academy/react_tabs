import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Tabs = ({ tabsList, selectedTab, onTabSelected }) => (
  <div className="Tabs">
    {tabsList.map(tab => (
      <div className="Tab">
        <button
          className={classNames('button', {
            active: selectedTab.id === tab.id,
          })}
          type="button"
          key={tab.id}
          onClick={() => onTabSelected(tab)}
        >
          {tab.title}
        </button>
      </div>
    ))}
    <p>{tabsList.find(tab => tab.id === selectedTab.id).content}</p>
  </div>
);

Tabs.propTypes = {
  tabsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  selectedTab: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onTabSelected: PropTypes.func.isRequired,
};

export default Tabs;
