import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, onChangeTab, selectedTab }) => (
  <>
    {tabs.map(tab => (
      <button
        type="button"
        onClick={() => onChangeTab(tab)}
        key={tab.id}
      >
        {tab.title}
      </button>
    ))}
    <p>{selectedTab.content}</p>
  </>
);

const tabTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
});

Tabs.propTypes = {
  onChangeTab: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(tabTypes).isRequired,
  selectedTab: tabTypes.isRequired,
};
