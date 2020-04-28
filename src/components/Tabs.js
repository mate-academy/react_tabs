import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TabType } from '../typedefs';

const Tabs = ({ tabs, activeIndex, activeTab, changeTab }) => (
  <section className="tabs">
    {tabs.map(tab => (
      <button
        key={tab.id}
        type="button"
        className={classNames(
          'tabs__button',
          { 'tabs__button--active': tab.id === activeIndex },
        )}
        onClick={() => changeTab(tab.id)}
      >
        {tab.title}
      </button>
    ))}
    <p className="tabs__content">
      { activeTab.content }
    </p>
  </section>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(TabType).isRequired,
  activeIndex: PropTypes.number.isRequired,
  activeTab: TabType.isRequired,
  changeTab: PropTypes.func.isRequired,
};

export default Tabs;
