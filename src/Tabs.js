import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const Tabs = ({ tabs, onChange, content }) => (
  <div className="tabs">
    {tabs.map(tab => (
      <button
        type="button"
        key={tab.title}
        onClick={() => onChange(tab.id)}
        className={tab.content === content && 'selected-tab'}
      >
        {tab.title}
      </button>
    ))}
  </div>
);

export default Tabs;

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
  })).isRequired,
  content: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
