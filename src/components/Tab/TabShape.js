import PropType from 'prop-types';

export const TabShape = {
  title: PropType.string.isRequired,
  index: PropType.number.isRequired,
  callback: PropType.func.isRequired,
  isActive: PropType.bool.isRequired,
};
