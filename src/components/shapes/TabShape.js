import PropTypes from 'prop-types';

export const TabShape = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
};
