import PropTypes from 'prop-types';

export const TabeType = {
  tabs: PropTypes.arrayOf(PropTypes.object),
  selectedTabId: PropTypes.number,
  selectedTabInfo: PropTypes.string,
  onTabSelected: PropTypes.func,
}.isRequired;
