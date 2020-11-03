import PropTypes from 'prop-types';
import { TabShape } from './TabShape';

export const TabsShape = {
  selected: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  ...TabShape,
};
