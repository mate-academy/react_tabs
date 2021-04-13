import PropTypes from 'prop-types';

export const propTypes = {
  tabsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedTab: PropTypes.string.isRequired,
  tabHandleChange: PropTypes.func.isRequired,
}

