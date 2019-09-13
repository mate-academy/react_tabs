import PropTypes from 'prop-types';

const tab = PropTypes.shape({
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
});

export const TabsPropTypes = {
  tabs: PropTypes.arrayOf(tab).isRequired,
  onTabSelected: PropTypes.func.isRequired,
  activeTab: PropTypes.number.isRequired,
};

export const TabPropTypes = {
  tab: tab.isRequired,
  onTabSelected: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  activeTab: PropTypes.number.isRequired,
};
