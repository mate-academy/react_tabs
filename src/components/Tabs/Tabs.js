import React from 'react';
import PropTypes from 'prop-types';
import Tab from '../Tab/Tab';

const Tabs = ({ tabs, index, onSelect }) => (
  <div>
    <div>
      {tabs.map((tab, i) => (
        <button
          className={i === index ? 'button__selected' : 'button'}
          key={tab.title}
          onClick={() => onSelect(i)}
          type="button"
        >
          {tab.title}
        </button>

      ))}
    </div>
    <Tab text={tabs[index].content} />
  </div>

);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  index: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Tabs;
