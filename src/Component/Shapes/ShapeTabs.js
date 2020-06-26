import PropTypes from 'prop-types';
import { ShapeTab } from './ShapeTab';

export const ShapeTabs = PropTypes.arrayOf(ShapeTab);

export const ShapeTabsDefault = {
  children: [],
  tabs: [],
};
