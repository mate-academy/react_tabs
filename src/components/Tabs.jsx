import React from 'react';
import './Tabs.scss';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => (

  <ul>
    {tabs.map(({ id, title, content }) => (
      <li key={id}>
        <button
          type="button"
          onClick={() => onTabSelected(id)}
        >
          {title}
        </button>
        {' - '}
        {id === selectedTabId && content}
      </li>
    ))}
  </ul>
);

const tabsPropTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape(tabsPropTypes).isRequired,
  ).isRequired,
  selectedTabId: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
