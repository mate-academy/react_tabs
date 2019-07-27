import React from 'react';
import PropTypes from 'prop-types';
import 'react-tabs/style/react-tabs.css';
import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
} from 'react-tabs';

const TabNav = ({ tabs }) => (
  <Tabs>
    <TabList>
      {tabs.map(item => (
        <Tab>{item.title}</Tab>
      ))}
    </TabList>

    {tabs.map(item => (
      <TabPanel>{item.content}</TabPanel>
    ))}

  </Tabs>
);

TabNav.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TabNav;
