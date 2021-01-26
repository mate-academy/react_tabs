import React from 'react';
import PropTypes from 'prop-types';

export const Tab = ({ tabs, active, handlerOnClick }) => (
  <div className="container">
    {tabs.map(tab => (
      <button
        type="button"
        onClick={() => handlerOnClick(tab.title)}
        className={active === tab.title ? 'active' : ''}
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
  handlerOnClick: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
};
