import PropTypes from 'prop-types';

export const ObjectType = PropTypes.shape({
  title: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.number,
});
