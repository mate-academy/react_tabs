import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ handler, title }) => (
  <button
    type="button"
    onClick={handler}
  >
    {title}
  </button>
);

Tab.propTypes = {
  handler: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Tab;
