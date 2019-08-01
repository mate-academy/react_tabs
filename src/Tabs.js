import React from 'react';
import Proptypes from 'prop-types';

const Tabs = ({ tabs, tabId, selectTab }) => (
  <div className="tabs">
    {tabs.map((tab, index) => (
      <section className="single">
        {/* eslint-disable-next-line */}
        <h2 onClick={() => selectTab(index)}>{tab.title}</h2>
      </section>
    ))}
    <p>{tabs[tabId].content}</p>
  </div>
);

Tabs.propTypes = {
  tabs: Proptypes.arrayOf.isRequired,
  tabId: Proptypes.number.isRequired,
  selectTab: Proptypes.func.isRequired,
};

export default Tabs;
