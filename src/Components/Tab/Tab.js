import React from 'react';
import PropTypes from 'prop-types';

export const Tab = ({
  tab,
  index,
  indexOfTab,
  selectedTab,
}) => (
  <button
    className={index === indexOfTab
      ? 'button button--active'
      : 'button'}
    type="button"
    onClick={() => {
      selectedTab(index);
    }}
  >
    {tab.title}
  </button>
);

Tab.propTypes = {
  tab: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  indexOfTab: PropTypes.number.isRequired,
  selectedTab: PropTypes.func.isRequired,
};
