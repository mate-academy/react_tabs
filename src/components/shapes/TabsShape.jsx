import PropType from 'prop-types';

export const TabsShape = PropType.shape({
  tabs: PropType.arrayOf(PropType.shape({
    title: PropType.string.isRequired,
    content: PropType.string.isRequired,
  })).isRequired,
  index: PropType.number.isRequired,
});
