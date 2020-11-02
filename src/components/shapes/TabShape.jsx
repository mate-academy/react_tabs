import PropTypes from 'prop-types';

export const TabShape = {
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};
