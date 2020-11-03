import PropTypes from 'prop-types';

export const tabShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}).isRequired;
