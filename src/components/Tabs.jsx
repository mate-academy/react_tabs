import React from 'react';
import PropTypes from 'prop-types';

import './Tabs.css';

export const Tabs = ({
  tabs,
  choosenTab,
  onTabSelected,
}) => (
  <div>
    {tabs.map((tab, index) => (
      <button
        className={choosenTab === index ? 'btn btn-active' : 'btn'}
        key={tab.title}
        id={index}
        type="submit"
        onClick={event => onTabSelected(event)}
      >
        {tab.title}
      </button>
    ))}

    <p className="content">{tabs[choosenTab].content}</p>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  choosenTab: PropTypes.number.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
