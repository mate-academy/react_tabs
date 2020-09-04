import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <>
      <div className="tabs">
        {tabs.map(tab => (
          <button
            type="button"
            className={classNames('tab', { active: tab === activeTab })}
            key={tab.id}
            onClick={() => setActiveTab(tab)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <p>{activeTab.content}</p>
    </>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
};
