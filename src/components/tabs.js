import React from 'react';
import propTypes from 'prop-types';

function Tabs({ tabs, handleTabSelect, activeTab }) {
  const className = i => (activeTab === i ? 'active item' : 'item');

  return (
    <>
      <div className="ui pointing secondary menu">
        {tabs.map((item, i) => (
          // eslint-disable-next-line
          <a className={className(i)} onClick={() => handleTabSelect(i)}>
            {item.title}
          </a>
        ))}
      </div>
      <div className="ui segment active tab">{tabs[activeTab].content}</div>
    </>
  );
}

Tabs.propTypes = {
  tabs: propTypes.arrayOf.isRequired,
  handleTabSelect: propTypes.func.isRequired,
  activeTab: propTypes.number.isRequired,
};

export default Tabs;
