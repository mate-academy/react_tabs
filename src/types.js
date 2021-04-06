import PropTypes from 'prop-types';

const tabType = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export const TabsType = {
  tabs: PropTypes.arrayOf(PropTypes.shape(tabType)).isRequired,
  selectedTab: PropTypes.shape(tabType).isRequired,
};
