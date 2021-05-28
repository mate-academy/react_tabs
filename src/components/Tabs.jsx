import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => (
  <ul>
    {tabs.map(({ id, title, content }) => (
      <li key={id}>
        <button
          type="button"
          href="#"
          onClick={() => onTabSelected(id)}
        >
          {title}
        </button>

        <p>
          {id === selectedTabId && content}
        </p>
      </li>
    ))}
  </ul>
);

const tabPropTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape(tabPropTypes).isRequired,
  ).isRequired,
  selectedTabId: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
