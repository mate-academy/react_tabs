import React from 'react';
import PropTypes from 'prop-types';

export const Tab = ({ id, title, setTab, active }) => (
  <button
    type="button"
    className={active === id ? 'active' : ''}
    onClick={() => setTab(id)}
  >
    {title}
  </button>
);

Tab.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  setTab: PropTypes.func.isRequired,
  active: PropTypes.number.isRequired,
};
