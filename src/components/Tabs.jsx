import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export function Tabs({ tabsList, currentTab, handleSelectTab }) {
  return (
    <ul className="ui top attached tabular menu">
      {tabsList.map(tab => (
        <li
          key={tab.title}
          className="list-item"
        >
          <button
            className={classNames('item tab-button', {
              active: currentTab.title === tab.title,
            })}
            type="button"
            onClick={() => handleSelectTab(tab)}

          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>
  );
}

Tabs.propTypes = {
  tabsList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  currentTab: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  handleSelectTab: PropTypes.func.isRequired,
};
