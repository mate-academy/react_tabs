import PropTypes from 'prop-types';
import { TabsProps } from './TabsProps';

export const TitleListProps = {
  index: PropTypes.number.isRequired,
  ...TabsProps,
  onTabSelected: PropTypes.func.isRequired,
};
