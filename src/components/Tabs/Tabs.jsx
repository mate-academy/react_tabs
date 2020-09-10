import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Tabs.css';

export const Tabs = ({ tabs, currentTab, onSelected }) => (
  <>
    <div className="tabs">
      {tabs.map(tab => (
        <button
          type="button"
          className={classNames('tab', { active: tab.id === currentTab })}
          key={tab.id}
          onClick={() => onSelected(tab.id)}
        >
          {tab.title}
        </button>
      ))}
    </div>
    <p>{tabs.find(tab => tab.id === currentTab).content}</p>
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentTab: PropTypes.number.isRequired,
  onSelected: PropTypes.func.isRequired,
};
