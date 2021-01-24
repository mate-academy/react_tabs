import PropTypes from 'prop-types';

export const TabsType = PropTypes.shape({
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  index: PropTypes.number.isRequired,
});

export const TabType = {
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};
