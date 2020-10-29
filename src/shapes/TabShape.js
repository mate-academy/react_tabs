import PropTypes from 'prop-types';

export const TabShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
}).isRequired;
