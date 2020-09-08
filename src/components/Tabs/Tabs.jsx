import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Tabs.scss';

export const Tabs = ({
  tabs,
  tabIndex,
  handleTabSelect,
}) => (
  <div className="tabs">
    <div>
      {tabs.map(tab => (
        <button
          key={tab.title}
          type="button"
          className={classNames({
            tabs__button: true,
            selected: tabIndex === tab.index,
          })}
          onClick={() => handleTabSelect(tab.index)}
        >
          {tab.title}
        </button>
      ))}
    </div>
    <p className="tabs__content">
      {tabs[tabIndex].content}
    </p>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    }),
  ).isRequired,
  tabIndex: PropTypes.string.isRequired,
  handleTabSelect: PropTypes.func.isRequired,
};
