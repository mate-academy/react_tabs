import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => (
  <>
    <ul className="nav nav-tabs nav-fill">
      {tabs.map(tab => (
        <li className="nav-item">
          <a
            onClick={() => onTabSelected(tab)}
            className="nav-link"
            href="#"
          >
            {tab.id}
          </a>
          {(selectedTabId === tab.id) ? <p>{tab.content}</p> : ''}
        </li>
      ))}
    </ul>
  </>
);

Tabs.propTypes = {
  selectedTabId: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string,
    title: PropTypes.string,
  })).isRequired,
};
