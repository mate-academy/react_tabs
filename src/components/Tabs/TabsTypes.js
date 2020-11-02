import PropTypes from 'prop-types';
import { TabTypes } from '../Tab/TabTypes';

export const TabsTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape(TabTypes)),
  index: PropTypes.number,
};
