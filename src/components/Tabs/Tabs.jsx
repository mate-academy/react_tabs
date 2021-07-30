import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from '../Tab';
import './Tabs.scss';

export const Tabs = ({ selectedTab, tabsList, setTitle }) => (
  <ul className="tabs-list">
    {tabsList.map(tab => (
      <li key={tab.id}>
        <Tab
          selectedTab={selectedTab}
          {...tab}
          onClick={() => setTitle(tab.title, tab.content)}
        />
      </li>
    ))}
  </ul>
);

Tabs.propTypes = {
  tabsList: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  selectedTab: PropTypes.string,
  setTitle: PropTypes.func.isRequired,
};

Tabs.defaultProps = {
  selectedTab: '',
};
