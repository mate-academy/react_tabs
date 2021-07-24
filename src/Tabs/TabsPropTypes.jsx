import PropTypes from 'prop-types';

export const TabsPropTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape([
      PropTypes.object,
    ]),
  ).isRequired,
};
