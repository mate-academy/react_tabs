import PropTypes from 'prop-types';

export const ShapeTab = PropTypes.shape({
  title: PropTypes.string.isRequired,
  toggle: PropTypes.func,
  toggleClass: PropTypes.bool,
  children: PropTypes.node,
});

export const ShapeTabDefault = {
  toggle: () => '',
  toggleClass: false,
  children: [],
};
