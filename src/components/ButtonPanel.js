import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel({ tabs, selectedTab, activeTab }) {
  return (
    <>

      <div className="tabs">
        {tabs.map((tab, index) => (
          <Button
            className="tabs__item"
            selectedTab={selectedTab}
            key={tab.title}
            index={index}
            activeTab={activeTab}
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

ButtonPanel.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedTab: PropTypes.func.isRequired,
  activeTab: PropTypes.number.isRequired,
};

export default ButtonPanel;
