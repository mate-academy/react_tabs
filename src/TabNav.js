import React from 'react';
import PropTypes from 'prop-types';
import 'react-tabs/style/react-tabs.css';
import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
} from 'react-tabs';

const TabNav = ({ tabs }) => {
  const color = `#${Math.round(Math.random() * 1000000)}`;
  const contentStyle = { fontSize: '18px', textAlign: 'center' };

  return (
    <Tabs style={{ color }}>
      <TabList>
        {tabs.map(item => (
          <Tab
            style={{ fontSize: '25px' }}
            key={Math.round(Date.now() * Math.random())}
          >
            {item.title}
          </Tab>
        ))}
      </TabList>

      {tabs.map(item => (
        <TabPanel
          style={contentStyle}
          key={Math.round(Date.now() * Math.random())}
        >
          {item.content}

        </TabPanel>
      ))}
    </Tabs>
  );
};

TabNav.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TabNav;
