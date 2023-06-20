import cn from 'classnames';
import { FC } from 'react';

interface Tab {
  id: string;
  title: string,
  content: string,
}

interface Props {
  tabs: Tab[];
  selectedTab: Tab;
  onClick: (tabId: string) => void;
}

export const Tabs: FC<Props> = ({ tabs, selectedTab, onClick }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({ 'is-active': selectedTab.id === tab.id })}
              data-cy="Tab"
              key={tab.id}
              aria-hidden="true"
              onClick={() => onClick(tab.id)}
            >
              <a href={`#${tab.id}`} data-cy="TabLink">{tab.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
