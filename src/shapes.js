import PropTypes from 'prop-types';

export const TabShape = PropTypes.shape({
  title: PropTypes.string,
  content: PropTypes.string,
  tabIndex: PropTypes.number,
  onSelect: PropTypes.func,
});
