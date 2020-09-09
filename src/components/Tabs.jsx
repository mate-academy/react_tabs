import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, changeTab, activeIndex }) => (
  <>
    {tabs.map((tab, index) => (
      <button
        className={index === activeIndex ? 'active' : null}
        type="button"
        key={tab.title}
        value={index}
        onClick={changeTab}
      >
        {tab.title}
      </button>
    ))}
    <div className="text">{tabs[activeIndex].content}</div>
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  activeIndex: PropTypes.number.isRequired,
  changeTab: PropTypes.func.isRequired,
};
