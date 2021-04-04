import PropTypes from 'prop-types';

const stringType = PropTypes.string.isRequired;

const tabType = {
  id: stringType,
  title: stringType,
  content: stringType,
};

export const TabsType = {
  tabs: PropTypes.arrayOf(PropTypes.shape(tabType)).isRequired,
  selectedTab: PropTypes.shape(tabType).isRequired,
  selectedTabId: stringType,
};
