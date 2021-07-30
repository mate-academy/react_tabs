import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => (
  <>
    <ul className="nav nav-tabs nav-fill">
      {tabs.map(tab => (
        <li
          key={tab.id}
          className="nav-item"
        >
          <a
            onClick={() => onTabSelected(tab)}
            className="nav-link"
            href="#"
          >
            {tab.id}
          </a>
        </li>
      ))}
    </ul>
    <p className="text-center mt-5">
      {tabs.find(tab => tab.id === selectedTabId).content}
    </p>
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
