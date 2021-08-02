import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({
  tabs,
  selectedTab,
  changeTab,
}) => (
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
    <h3>{selectedTab.content}</h3>
  </>
);
export default Tabs;

const PropTabs = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
});

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTabs).isRequired,
  selectedTab: PropTabs.isRequired,
  changeTab: PropTypes.func.isRequired,
};
