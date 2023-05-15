import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [isBtn, setIsBtn] = useState('Tab 1');
  const setVisibleContent = (title:string) => {
    const visibleContent = tabs.find(tab => tab.title === title);

    return visibleContent ? visibleContent?.content
      : tabs[0].content;
  };

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${isBtn}`}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <Tabs
                tab={tab}
                btn={isBtn}
                setIsBtn={setIsBtn}
                key={tab.id}
              />
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {setVisibleContent(isBtn)}
        </div>
      </div>
    </div>
  );
};
