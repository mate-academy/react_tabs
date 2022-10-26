import React from 'react';
import classnames from 'classnames';

interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tab[],
  onTabSelected: (tab: Tab) => void,
  selectedTabId: string,
}


export const Tabs: React.FC<Props> = ({ tabs, onTabSelected, selectedTabId }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const clickOn = (tab: Tab) => {
    if (selectedTab.id !== tab.id) {
      onTabSelected(tab);
    }
  };
    
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
        <li 
          className={classnames({
            'is-active': selectedTab.id === tab.id,
          })}
          data-cy="Tab"
          key={tab.id}
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={() => clickOn(tab) }
          >
            {tab.title}
          </a>
        </li>  
        ))}
        
      </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
}

