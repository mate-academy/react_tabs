import React from 'react';
import PropTypes from 'prop-types';
import './Tab.css';

export const Tab = ({ tabs, choosenTab, onTabSelected }) => (
  <>
    <div className="list">
      {
        tabs.map(tab => (
          <li
            key={tab.index}
            className="item"
          >
            <button
              type="button"
              onClick={() => onTabSelected(tab.index)}
            >
              {tab.title}
            </button>
          </li>
        ))
      }
    </div>
    <div className="content">
      {tabs[choosenTab].content}
    </div>
  </>
);

Tab.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      index: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  choosenTab: PropTypes.number.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
