import React from 'react';
import PropTypes from 'prop-types';

import { Tab } from '../Tab';

import './TabsList.scss';

export const TabsList = ({ tabsList, selectedTab, setTitle }) => (
  <ul className="tabs-list">
    {

        tabsList.map(tab => (
          <li key={tab.id}>
            <Tab
              selectedTab={selectedTab}
              onClick={() => setTitle(tab.title, tab.content)}
              {...tab}
            />
          </li>
        ))
      }
  </ul>
);

TabsList.propTypes = {
  tabsList: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  selectedTab: PropTypes.string,
  setTitle: PropTypes.func.isRequired,
};

TabsList.defaultProps = {
  selectedTab: '',
};
