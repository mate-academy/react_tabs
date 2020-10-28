import PropTypes from 'prop-types';

export const contentType = PropTypes.PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.object,
]);

export const tabShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  content: contentType.isRequired,
  id: PropTypes.number.isRequired,
});
