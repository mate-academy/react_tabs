import React from 'react';
import PropTypes from 'prop-types';

function Tabs({ tabs, handleTabSelect, activeTab }) {
  const className = i => (activeTab === i ? 'active item' : 'item');

  return (
    <>
      <div className="ui pointing secondary menu">
        {tabs.map((item, i) => (
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
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    })
  ).isRequired,
  handleTabSelect: PropTypes.func.isRequired,
  activeTab: PropTypes.number.isRequired,
};

export default Tabs;
