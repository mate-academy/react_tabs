import PropTypes from 'prop-types';
import { TabShape } from './TabShape';

export const TabsShape = PropTypes.shape({
  tabs: PropTypes.arrayOf(TabShape).isRequired,
  index: PropTypes.number.isRequired,
}).isRequired;
