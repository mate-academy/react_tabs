import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, changeTab }) => (
  tabs.map((item, index) => (
    <button
      type="button"
      onClick={() => changeTab(index)}
      key={item.title}
    >
      {item.title}
    </button>
  ))
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf.isRequired,
  changeTab: PropTypes.func.isRequired,
};
