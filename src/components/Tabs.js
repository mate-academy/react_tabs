import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ tabs, selectedTab, changeTab }) => (
  <ul>
    {tabs.map(tab => (
      <li key={tab.id}>
        <button
          type="button"
          onClick={() => {
            changeTab(tab);
          }}
        >
          {tab.title}
        </button>
      </li>
    ))}
    <p>{selectedTab.content}</p>
  </ul>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  selectedTab: PropTypes.string.isRequired,
  changeTab: PropTypes.func.isRequired,
};

export default Tabs;
