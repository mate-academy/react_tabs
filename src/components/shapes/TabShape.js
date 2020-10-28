import PropTypes from 'prop-types';

export const TabShape = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
