import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ changeTab, selectedTab, tabs }) => (
  <>
    {tabs.map(tab => (
      <button
        type="button"
        key={tab.id}
        onClick={() => changeTab(tab)}
      >
        {tab.title}
      </button>
    ))}
    <p>{selectedTab.content}</p>
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedTab: PropTypes.number.isRequired,
  changeTab: PropTypes.func.isRequired,

};
