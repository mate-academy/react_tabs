import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ name, onClick, id }) => (
  <button
    type="button"
    onClick={onClick}
    id={id}
  >
    {name}
  </button>
);

Tabs.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
