import React from 'react';
import './Tabs.css';
import PropTypes from 'prop-types';

const Tabs = ({ tabs, onSelected, tabIndex }) => (
  <div className="container">
    <div className="tabs">
      {tabs.map(tab => (
        <button
          key={tab.index}
          type="button"
          className={
            `tabs__item ${tabIndex === tab.index ? 'tabs__item--active' : ''}`
          }
          onClick={() => onSelected(tab.index)}
        >
          {tab.title}
        </button>
      ))}
    </div>

    <div className="tabs__content">
      {tabs[tabIndex].content}
    </div>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    index: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
  onSelected: PropTypes.func.isRequired,
  tabIndex: PropTypes.number.isRequired,
};

export default Tabs;
