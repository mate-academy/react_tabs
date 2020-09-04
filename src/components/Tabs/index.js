import React, { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import './Tabs.css';

function Tabs({ tabs }) {
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  function handleTabChange(target) {
    setCurrentTab(tabs.find(tab => tab.title === target.title));
  }

  return (
    <>
      <div className="Tabs">
        <div className="Tabs__headers">
          {tabs.map(tab => (
            <button
              key={tab.title}
              className={cn({
                Tabs__header: true,
                Tabs__selected: currentTab.title === tab.title,
              })}
              type="button"
              onClick={() => handleTabChange(tab)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <p className="Tabs__content">{currentTab.content}</p>
      </div>
    </>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
};

export default Tabs;
