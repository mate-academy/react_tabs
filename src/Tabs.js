import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, onTabSelected, selectedTab }) => (
  <>
    <div className="tab">
      {tabs.map(tab => (
        <button
          className={ClassNames({ active: tab.id === selectedTab })}
          key={tab.id}
          type="button"
          onClick={() => {
            onTabSelected(tab.id);
          }}
        >
          {tab.title}
        </button>
      ))}
    </div>
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape(
    PropTypes.string.isRequired,
  )).isRequired,
  onTabSelected: PropTypes.func.isRequired,
  selectedTab: PropTypes.number.isRequired,
};
