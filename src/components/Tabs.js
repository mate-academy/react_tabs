import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';

const Tabs = ({ tabs, selectedTab, changeTab }) => (
  <ul>
    {tabs.map(tab => (
      <li
        className="list"
        key={tab.id}
      >
        <button
          className={selectedTab.id === tab.id
            ? 'btn active'
            : 'btn'
        }
          type="button"
          onClick={() => {
            changeTab(tab);
          }}
        >
          {tab.title}
        </button>
      </li>
    ))}
    <p
      className="text"
    >
      {selectedTab.content}
    </p>
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
