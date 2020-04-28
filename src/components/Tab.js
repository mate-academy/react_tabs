import React from 'react';
import PropTypes from 'prop-types';

export const Tab = ({ tab, clickButton, active }) => (
  <li className={active === tab.index ? 'tabs__item--active' : ''}>
    <button type="button" className="clickButton" onClick={() => clickButton(tab.index)}>
      {tab.title}
    </button>
  </li>
);

Tab.propTypes = {
  clickButton: PropTypes.func.isRequired,
  tab: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
