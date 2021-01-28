import React from 'react';
import './Tabs.css';
import PropsTypes from 'prop-types';

export const Tabs = ({ tabs, selectedTabIndex, onChange }) => (
  <div className="tab-container">
    {tabs.map((tab, i) => (
      <button
        className={`button ${selectedTabIndex === i ? 'button__active' : ''}`}
        key={tab.title}
        type="button"
        onClick={() => onChange(i)}
      >
        {tab.title}
      </button>
    ))}
  </div>
);

Tabs.propTypes = {
  tabs: PropsTypes.arrayOf(PropsTypes.shape({
    title: PropsTypes.string.isRequired,
    content: PropsTypes.string.isRequired,
  })).isRequired,
  index: PropsTypes.number.isRequired,
  onChange: PropsTypes.func.isRequired,
}.isRequired;
