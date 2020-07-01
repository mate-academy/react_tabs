import PropTypes from 'prop-types';

const tabsFromServer = PropTypes.shape({
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
});

export const shapeTab = PropTypes.shape({
  tab: tabsFromServer,
  change: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
});

export const shapeTabs = PropTypes.shape({
  tabs: PropTypes.arrayOf(shapeTab).isRequired,
  onChange: PropTypes.func.isRequired,
});
