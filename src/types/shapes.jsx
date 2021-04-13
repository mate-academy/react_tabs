import propTypes from 'prop-types';

export const cardShape = {
  id: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  content: propTypes.string.isRequired,
};
