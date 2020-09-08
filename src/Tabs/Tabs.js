import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Tabs.css';

export const Tabs = ({ tabs, tabIndex, onChange }) => (
  <div>
    <ul className="tabs">
      {tabs.map((tab, index) => (
        <li key={tab.title}>
          <button
            onClick={() => onChange(index)}
            className={classNames({
              tab: true,
              'tab--selected': index === tabIndex,
            })}
            type="button"
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  tabIndex: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
