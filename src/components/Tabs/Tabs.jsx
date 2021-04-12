import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.scss';

export const Tabs = ({
  tabs,
  selectedTabIndex,
  onTabSelected,
}) => (
  <>
    {tabs.map(tab => (
      <button
        className="button"
        type="button"
        key={tab.id}
        onClick={() => onTabSelected(tab)}
      >
        {tab.title}
      </button>
    ))}
    <div className="content">
      {tabs.find((tab, i) => i === selectedTabIndex).content}
    </div>
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isReqired,
  })).isRequired,
  selectedTabIndex: PropTypes.number.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
