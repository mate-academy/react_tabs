import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Tabs.css';

export const Tabs = ({ tabs, showSelectedTabContent, activeId }) => (

  <ul className="list">
    {tabs.map(tab => (
      <li
        key={tab.id}
        className="item"
      >
        <button
          type="button"
          id={tab.id}
          onClick={showSelectedTabContent}
          className={classNames(`button`,
            {
              'button--active': tab.id === activeId,
            })
          }
        >
          {tab.title}
        </button>
      </li>
    ))}
  </ul>
);

Tabs.propTypes = {
  tabs: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  showSelectedTabContent: PropTypes.func.isRequired,
  activeId: PropTypes.number.isRequired,
};
