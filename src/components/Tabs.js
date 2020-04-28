import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ObjectType } from '../typedefs';

const Tabs = ({ tabs, activeIndex, activeTab, onTabSelected }) => (
  <section className="tabs">
    {tabs.map(tab => (
      <button
        key={tab.id}
        type="button"
        className={classNames(
          'tabs__button',
          { 'tabs__button--active': tab.id === activeIndex },
        )}
        onClick={() => onTabSelected(tab.id)}
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
  tabs: PropTypes.arrayOf(ObjectType).isRequired,
  activeIndex: PropTypes.number.isRequired,
  activeTab: ObjectType.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};

export default Tabs;
