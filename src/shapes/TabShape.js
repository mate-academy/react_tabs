import PropTypes from 'prop-types';

export const TabShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
}).isRequired;
