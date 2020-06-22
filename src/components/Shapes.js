import PropTypes from 'prop-types';

const shapeTab = PropTypes.shape({
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
});

export const shapeAllTab = PropTypes.shape({
  tab: shapeTab,
  change: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
});

export const shapeAllTabs = PropTypes.shape({
  tabs: PropTypes.arrayOf(shapeAllTab).isRequired,
  onChange: PropTypes.func.isRequired,
});
