import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({
  tabs,
  selectedTab,
  onTabSelected,
}) => {
  const selectTab = (event, tab) => {
    event.preventDefault();
    onTabSelected(tab);
  };

  return (
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
        >
          <a
            href="/"
            onClick={event => selectTab(event, tab)}
          >
            {tab.title}
          </a>
        </li>
      ))}
      {selectedTab.content}
    </ul>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  selectedTab: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onTabSelected: PropTypes.func.isRequired,
};

export default Tabs;
