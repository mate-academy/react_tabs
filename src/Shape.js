import PropTypes from 'prop-types';

export const TabShape = PropTypes.shape({
  tabIndex: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
});
