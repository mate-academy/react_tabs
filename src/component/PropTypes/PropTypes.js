import PropTypes from 'prop-types';

const tabsListProps = PropTypes.shape({
  title: PropTypes.string,
  content: PropTypes.string,
});

export const tabsProps = {
  tabs: PropTypes.arrayOf(PropTypes.shape(tabsListProps)).isRequired,
};

export const tabListProps = {
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isCurrentTab: PropTypes.number.isRequired,
  handler: PropTypes.func.isRequired,
};
