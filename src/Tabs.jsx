import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Tabs = ({ tabs, onTabSelected }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleClick = (event) => {
    const buttonValue = event.target.textContent;
    const selectedTab = tabs.find(tab => tab.title === buttonValue);

    setActiveTab(selectedTab);
    onTabSelected(buttonValue);
  };

  return (
    <div className="tabs">
      {tabs.map(tab => (
        <button
          type="button"
          className={classNames('tab', { active: tab === activeTab })}
          key={tab.id}
          onClick={handleClick}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
