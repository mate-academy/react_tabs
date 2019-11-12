import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function Tabs({ tabs, selectedTab, activeTab }) {
  return (
    <>
      <div className="tabs">
        {tabs.map((tab, index) => (
          <Button
            active={activeTab === index}
            selectedTab={selectedTab}
            key={tab.title}
            index={index}
            title={tab.title}
          />
        ))}
      </div>
      <div className="line" />
      <br />
      <div>
        {tabs[activeTab].content}
      </div>
    </>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedTab: PropTypes.func.isRequired,
  activeTab: PropTypes.number.isRequired,
};

export default Tabs;
