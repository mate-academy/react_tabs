import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ tabs, onChangeTab, selectedTab }) => (
  <div>
    {tabs.map(tab => (
      <button
        onClick={() => onChangeTab(tab)}
        key={tab.id}
        type="button"
      >
        {tab.title}
      </button>
    ))}
    <p>
      {selectedTab.content}
    </p>
  </div>
);

const selectedTabType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
});

const tabsType = PropTypes.arrayOf(selectedTabType);

Tabs.propTypes = {
  tabs: tabsType.isRequired,
  selectedTab: selectedTabType.isRequired,
  onChangeTab: PropTypes.func.isRequired,
};

export default Tabs;
