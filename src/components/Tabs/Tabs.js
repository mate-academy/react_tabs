import React from 'react';
import './Tabs.css';
import propTypes from 'prop-types';

const Tabs = ({ tabs, handleTabSelect, indexItem }) => {
  const className = i => (indexItem === i
    ? 'nav-link active'
    : 'nav-link');

  return (
    <>
      <ul className="nav nav-pills mb-3">
        {tabs.map((tab, i) => (
          <li className="nav-item" onClick={() => handleTabSelect(i)} key={i}>
            <a href="#" className={className(i)}>{tab.title}</a>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {tabs[indexItem].content}
      </div>
    </>
  );
};

Tabs.propTypes = {
  tabs: propTypes.arrayOf.isRequired,
  handleTabSelect: propTypes.func.isRequired,
  indexItem: propTypes.number.isRequired,
};

export default Tabs;
