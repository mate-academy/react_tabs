import React from 'react';
import { TabsShape } from '../Shape/TabsShape';
import './Tabs.css';
import 'semantic-ui-css/semantic.min.css';

export const Tabs = ({ tabs, selected, onChange }) => {
  const selectedTab = tabs.find(tab => tab.index === selected);

  return (
    <>
      <ul className="App__list">
        {
          tabs.map(tab => (
            <li key={tab.index}>
              <button
                className="ui primary button"
                type="button"
                onClick={() => onChange(tab)}
              >
                {tab.title}
              </button>
            </li>
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
