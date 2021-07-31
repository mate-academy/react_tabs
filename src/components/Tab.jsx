import React from 'react';
import propTypes from 'prop-types';
import './tab.css';

export const Tab = ({
  tabs,
  onTabSelected,
  selectedTab,
}) => (
  <>
    <ul className="Tab nav nav-pills">
      {tabs.map(tab => (
        <li key={tab.id} className="nav-item">
          <button
            type="button"
            onClick={() => {
              onTabSelected(tab);
            }}
            className={tab === selectedTab ? 'nav-link active' : 'nav-link'}
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>
    <p>{selectedTab.content}</p>
  </>
);

Tab.propTypes = {
  tabs: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      title: propTypes.string.isRequired,
      content: propTypes.string.isRequired,
    }).isRequired,
  ).isRequired,

  onTabSelected: propTypes.func.isRequired,

  selectedTab: propTypes.shape({
    id: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    content: propTypes.string.isRequired,
  }).isRequired,
};
