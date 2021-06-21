import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.scss';

export const Tabs = ({ tabs, onContent, selectedTab }) => (
  <div>
    <ul className="tabsList">
      {tabs.map(tab => (
        <li key={tab.id}>
          <button
            className={tab.id === selectedTab.id ? 'active' : ''}
            type="button"
            onClick={() => (
              onContent(tab)
            )}
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>
    <p>{selectedTab.content}</p>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onContent: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired,
};

export default Tabs;
