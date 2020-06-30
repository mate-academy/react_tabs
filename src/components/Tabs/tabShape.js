import PropType from 'prop-types';

export const tabShape = PropType.shape({
  title: PropType.string.isRequired,
  content: PropType.string.isRequired,
});
