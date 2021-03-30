import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Tabs.scss';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  return (
    <div className="tabs">
      <div className="ui top attached tabular menu">
        {tabs.map(tab => (
          <button
            type="button"
            className={classNames('item', {
              active: selectedTab.id === tab.id,
            })}
            key={tab.id}
            onClick={() => onTabSelected(tab)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="ui bottom attached tab segment active">
        {selectedTab.content}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  selectedTab: PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
