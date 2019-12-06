import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ tabs, onTabSelected, selectedIndex }) => (
  <>
    <div>
      {tabs.map((tab, i) => (
        <button
          className={i === selectedIndex ? 'button active' : 'button'}
          type="button"
          key={tab.title}
          onClick={() => onTabSelected(i)}
        >
          {tab.title}
        </button>
      ))}
    </div>
    <p className="text">
      {tabs[selectedIndex].content}
    </p>
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  onTabSelected: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number.isRequired,
};

export default Tabs;
