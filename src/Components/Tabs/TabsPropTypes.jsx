import PropTypes from 'prop-types';

export const TabsPropTypes = {
  onClick: PropTypes.func.isRequired,
  stateId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
