import PropTypes from 'prop-types';

export const TabTypes = {
  tab: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }),
};
