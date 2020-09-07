import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ tabs, index, changeIndex }) => (
  <div className="container">
    <div className="tabs">
      {tabs.map(tab => (
        <button
          type="button"
          key={tab.title}
          className={`button ${index === tab.index && 'select'}`}
          onClick={() => changeIndex(tab.index)}
        >
          {tab.title}
        </button>
      ))}
    </div>
    <p className="content">{tabs[index].content}</p>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
  })).isRequired,
  index: PropTypes.number.isRequired,
  changeIndex: PropTypes.func.isRequired,
};

export default Tabs;
