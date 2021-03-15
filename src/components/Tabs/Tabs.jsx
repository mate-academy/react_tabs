import React from 'react';
import './Tabs.css';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, chooseTab }) => {
  return (
    <ul className="list">
      {tabs.map(tab => (
        <li className="list__item"
          key={tab.id}
          onClick={() => {
            chooseTab(tab)
          }}
        >
          {tab.title}
        </li>
      ))}
    </ul>
  ) 
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ),

  chooseTab: PropTypes.func.isRequired,
};

Tabs.defaultProps = {
  tabs: [],
}
