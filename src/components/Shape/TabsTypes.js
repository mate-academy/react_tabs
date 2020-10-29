import PropTypes from 'prop-types';

export const TabsTypes = PropTypes.shape({
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
});
