import React from 'react';
import PropTypes from 'prop-types';

export const Tab = ({ tab, clickHandler }) => (
  <button
    onClick={clickHandler(tab.content)}
    type="button"
  >
    {tab.title}
  </button>
);

Tab.propTypes = {
  tab: PropTypes.shape({
    content: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  clickHandler: PropTypes.func.isRequired,
};
