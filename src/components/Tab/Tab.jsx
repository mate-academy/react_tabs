import React from 'react';
import PropTypes from 'prop-types';

export const Tab = ({ tabs, active, selectTab }) => (
  <div className="container">
    {tabs.map((tab, idx) => (
      <button
        type="button"
        value={idx}
        onClick={() => selectTab(idx)}
        className={active === idx ? 'active' : ''}
      >
        {tab.title}
      </button>
    ))}
  </div>
);

Tab.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectTab: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
};
