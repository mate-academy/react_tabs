import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.scss';

export const Tabs = ({
  tabsCopy,
  selectedTabIndex,
  onTabSelected,
}) => (
  <>
    {tabsCopy.map(tab => (
      <button
        className="button"
        type="button"
        key={tab.title}
        onClick={() => onTabSelected(tab)}
      >
        {tab.title}
      </button>
    ))}
    <div className="content">
      {tabsCopy.find((tab, i) => i === selectedTabIndex).content}
    </div>
  </>
);

Tabs.propTypes = {
  tabsCopy: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isReqired,
  })).isRequired,
  selectedTabIndex: PropTypes.number.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
