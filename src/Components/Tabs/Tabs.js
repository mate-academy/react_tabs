import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, activeTab, tabHandler }) => (
  <section>
    <div>
      {tabs.map(tab => (
        <button
          type="button"
          onClick={() => {
            tabHandler(tab.title);
          }}
          className={activeTab === tab.title ? 'active' : ''}
        >
          {tab.title}
        </button>
      ))}
    </div>
    <div>
      {tabs.filter(tab => tab.title === activeTab).map(t => (
        <p>{t.content}</p>
      ))}
    </div>
  </section>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeTab: PropTypes.func.isRequired,
  tabHandler: PropTypes.func.isRequired,
};
