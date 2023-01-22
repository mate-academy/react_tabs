import React from 'react';
import cn from 'classnames';

interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tab[];
  selectedTabTitle: string;
  selectedTabId: string;
  selectedTabContent: string,
  onSelectedTab: (id: string, title: string, content: string) => void,

};

export const Tabs:React.FC<Props> = ({
  tabs,
  selectedTabTitle,
  selectedTabId,
  selectedTabContent,
  onSelectedTab,

}) => (
  <div className="section">
    <h1 className="title">
      {`Selected tab is ${selectedTabTitle}`}
    </h1>

    <div data-cy="TabsComponent">

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({ 'is-active': selectedTabId === tab.id })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => onSelectedTab(tab.id, tab.title, tab.content)}
              >
                {tab.title}
              </a>
            </li>
          ))}

        </ul>
      </div>

      <div className="block" data-cy="Tab-Content">
        {selectedTabContent}
      </div>
    </div>
  </div>
);
