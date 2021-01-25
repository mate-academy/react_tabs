import React from 'react';
import './Tabs.css';
import PropsTypes from 'prop-types';

export const Tabs = ({ tabs, index, onChange }) => (
  <>
    <div className="tab-container">
      {tabs.map((tab, i) => (
        <button
          className={`button ${index === i ? 'button__active' : ''}`}
          key={tab.title}
          type="button"
          onClick={() => {
            onChange(i);
          }}
        >
          {tab.title}
        </button>
      ))}
    </div>
    <p className="content">{tabs[index].content}</p>
  </>
);

Tabs.propTypes = {
  tabs: PropsTypes.arrayOf(PropsTypes.shape({
    title: PropsTypes.string.isRequired,
    content: PropsTypes.string.isRequired,
  })).isRequired,
  index: PropsTypes.number.isRequired,
  onChange: PropsTypes.func.isRequired,
}.isRequired;
