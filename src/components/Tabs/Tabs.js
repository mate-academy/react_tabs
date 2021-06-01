import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.scss';

const Tabs = ({ tabs, onTabSelected, selectedTab }) => (
  <div className="container">
    <div>
      {tabs.map(tab => (
        <button
          className="button"
          type="button"
          key={tab.id}
          value={tab}
          onClick={() => onTabSelected(tab)}
        >
          {tab.title}
        </button>
      ))}
    </div>
    <p className="content">{selectedTab.content}</p>
  </div>
);

const tabProps = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

Tabs.propTypes = {
  onTabSelected: PropTypes.func.isRequired,
  selectedTab: PropTypes.shape(tabProps).isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape(tabProps).isRequired,
  ).isRequired,
};

export default Tabs;
