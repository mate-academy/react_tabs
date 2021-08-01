import React from 'react';
import './Tabs.scss';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, addTab, selectedTabTitle }) => (
  <div className="container">
    {tabs.map(tab => (
      <div key={tab.id}>
        <button
          type="button"
          value={tab.title}
          onClick={addTab}
          className="button"
        >
          {tab.title}
        </button>
        <p className="paragraph">
          {(selectedTabTitle === tab.title) && tab.content}
        </p>
      </div>

    ))}
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
  addTab: PropTypes.func.isRequired,
  selectedTabTitle: PropTypes.string.isRequired,

};
