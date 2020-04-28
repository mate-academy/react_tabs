import PropTypes from 'prop-types';

export const TabType = PropTypes.shape({
  title: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.number,
});
