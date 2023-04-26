import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import classNames from 'classnames';
import { Tabs } from './components/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState('tab-1');
  const [selectedTabTitle, setSelectedTabTitle] = useState('Tab 1');
  const [selectedTabContent, setSelectedTabContent] = useState('Some text 1');

  const onTabSelected = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    const selectedTab = tabs.filter(tab => tab.id === ev.currentTarget.id)[0];

    setSelectedTabId(selectedTab.id);
    setSelectedTabTitle(selectedTab.title);
    setSelectedTabContent(selectedTab.content);
  };

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is&nbsp;
        {selectedTabTitle}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                className={classNames({
                  'is-active': tab.id === selectedTabId,
                })}
                data-cy="Tab"
                key={tab.id}
              >
                <Tabs tab={tab} onTabSelected={onTabSelected} />
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTabContent}
        </div>
      </div>
    </div>
  );
};
