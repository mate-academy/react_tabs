import PropTypes from 'prop-types';

export const TabeType = {
  tabs: PropTypes.arrayOf(PropTypes.object),
  selectedTabId: PropTypes.number,
  onTabSelected: PropTypes.func,
}.isRequired;
