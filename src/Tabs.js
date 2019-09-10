import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ tabs, onTabSelected, selectedIndex }) => (
  <div>
    {tabs.map(
      (tab, index) => (
        <button
          onClick={() => onTabSelected(index)}
          type="button"
          className="button"
          key={tab.title}
        >
          {tab.title}
        </button>
      )
    )}
    <div className="textContent">{tabs[selectedIndex].content}</div>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object),
  onTabSelected: PropTypes.func,
  selectedIndex: PropTypes.number,
}.isRequired;

export default Tabs;
