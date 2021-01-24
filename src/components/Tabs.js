import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Tabs = ({ tabs, index, onTabSelected }) => (
  <>
    <div>
      {tabs.map((tab, i) => (
        <button
          key={tab.id}
          type="button"
          className={i === index ? 'button__selected' : 'button'}
          onClick={() => onTabSelected(i)}
        >
          {tab.title}
        </button>
      ))}
    </div>

    <div className="tabs__content">
      {tabs[index].content}
    </div>
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
  index: PropTypes.number.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};

export default Tabs;
