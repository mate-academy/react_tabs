import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, selectedTabId, tabChanger }) => (
  <div>
    <ul className="nav nav-tabs">

      {tabs.map(tab => (
        <li className="nav-item" key={tab.id}>
          <button
            className={classNames(`nav-link`,
              { active: selectedTabId === tab.id })}
            type="button"
            onClick={() => tabChanger(tab)}
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>

    <div>
      {tabs.find(tab => selectedTabId === tab.id).content}
    </div>

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
  selectedTabId: PropTypes.string.isRequired,
  tabChanger: PropTypes.func.isRequired,
};
