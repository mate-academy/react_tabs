import React from 'react';
import PropTypes from 'prop-types';

import './Tabs.css';

export const Tabs = ({ tabs, handleChange }) => (
  <>
    <div>
      {tabs.map((tab, index) => (
        <button
          key={tab.title}
          className="button"
          type="button"
          onClick={() => {
            handleChange(index);
          }}
        >
          {tab.title}
        </button>
      ))}
    </div>
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape(
    PropTypes.string.isRequired,
  )).isRequired,
  handleChange: PropTypes.func.isRequired,
};
