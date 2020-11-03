import React from 'react';
import { TabsShape } from '../Shape/TabsShape';
import { Tab } from '../Tab';
import './Tabs.css';

export const Tabs = ({ tabs, selected, onChange }) => {
  const selectedTab = tabs.find(tab => tab.index === selected);

  return (
    <>
      <ul className="App__list">
        {
          tabs.map(tab => (
            <Tab
              key={tab.index}
              onChange={onChange}
              tab={tab}
            />
          ))
        }
      </ul>
      <p className="ui floating message">
        {
          selectedTab.content
        }
      </p>
    </>
  );
};

Tabs.propTypes = TabsShape;
