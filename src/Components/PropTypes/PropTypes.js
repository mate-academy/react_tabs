import PropTypes from 'prop-types';

export const tabPropTypes = {
  handleClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export const tabsPropTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
};
