import React from 'react';
import PropTypes from 'prop-types';

const classNames = require('classnames');

export const Tab = ({ tab, toSwitchText, text }) => (
  <button
    type="button"
    className={
      classNames('nav-item', 'nav-link', { active: tab.content === text })}
    onClick={() => toSwitchText(tab.content)}
  >
    {tab.title}
  </button>
);

Tab.propTypes = {
  tab: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  toSwitchText: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
