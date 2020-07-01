import PropTypes from 'prop-types';

export const TabShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
});
