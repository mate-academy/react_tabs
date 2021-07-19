import React from 'react';
import PropTypes from 'prop-types';
import { TabsTitle } from '../TabsTitle/TabsTitle';
import { TabType, SelectedTabIdType, OnTabSelectedType } from '../../types';
import './TabsTitles.css';

export const TabsTitles = ({ tabs, tabId, onTabSelected }) => (
  <ul className="tabs__headers">
    {tabs.map(tab => (
      <li
        key={tab.id}
      >
        <TabsTitle
          tab={tab}
          tabId={tabId}
          onTabSelected={onTabSelected}
        />
      </li>
    ))}
  </ul>
);

TabsTitles.propTypes = {
  tabs: PropTypes.arrayOf(TabType.isRequired).isRequired,
  tabId: SelectedTabIdType.isRequired,
  onTabSelected: OnTabSelectedType.isRequired,
};
