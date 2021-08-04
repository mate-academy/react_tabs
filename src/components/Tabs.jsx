import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({
  tabs,
  selectedTab,
  onTabSelected,
}) => (
  <>
    {tabs.map(tab => (
      <button
        type="button"
        key={tab.id}
        onClick={() => onTabSelected(tab)}
      >
        {tab.title}
      </button>
    ))}
    <h3>{selectedTab.content}</h3>
  </>
);

export default React.memo(Tabs);

const PropTabs = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
});

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTabs).isRequired,
  selectedTab: PropTabs.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
