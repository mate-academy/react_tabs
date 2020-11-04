import React from 'react';
import PropTypes from 'prop-types';
import './Tab.css';

export const Tab = ({ tabs, onTabSelected }) => (
  <>
    <div className="list">
      {
        tabs.map(tab => (
          <li
            key={tab.title}
            className="item"
          >
            <button
              type="button"
              className="ui button"
              onClick={() => onTabSelected(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))
      }
    </div>
  </>
);

Tab.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
