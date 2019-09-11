import PropTypes from 'prop-types';

const TabShape = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export const TabTypes = {
  tab: PropTypes.objectOf(TabShape).isRequired,
};

export const TabsTypes = {
  tabs: PropTypes.arrayOf(PropTypes.objectOf(TabShape)).isRequired,
};
