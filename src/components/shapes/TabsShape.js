import PropTypes from 'prop-types';
import { TabShape } from './TabShape';

export const TabsShape = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape(TabShape),
  ).isRequired,
  defaultTabIndex: PropTypes.number.isRequired,
};
