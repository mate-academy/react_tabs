import PropTypes from 'prop-types';

export const PropForTab = {
  toggle: PropTypes.func.isRequired,
  tab: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
