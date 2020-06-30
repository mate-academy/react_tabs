import PropTypes from 'prop-types';

export const TabValidation = {
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  selectTab: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
};
