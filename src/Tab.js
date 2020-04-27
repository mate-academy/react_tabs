import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ tab, clickHandler, activeId }) => (
  <button
    className={activeId === tab.id ? 'button-active' : 'button'}
    type="button"
    onClick={() => clickHandler(tab.id)}
  >
    {tab.title}
  </button>
);

export default Tab;

Tab.propTypes = {
  tab: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  clickHandler: PropTypes.func.isRequired,
  activeId: PropTypes.number.isRequired,
};
