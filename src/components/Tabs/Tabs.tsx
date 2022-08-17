import React from 'react';
import cn from 'classnames';

type Tab = {
  id: string,
  title: string,
  content: string,
};

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  setSelectedTab: CallableFunction,
};

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, selectedTabId, setSelectedTab } = props;
  const tabContent = tabs.find(tab => tab.id === selectedTabId)?.content;

  const selectTab = (event: React.MouseEvent<HTMLAnchorElement>, tab: Tab) => {
    if (tab.id !== selectedTabId) {
      event.preventDefault();
      setSelectedTab(tab);
    }
  };

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn({ 'is-active': selectedTabId === tab.id })}
            >
              <a
                href={`#${tab.id}`}
                onClick={(event) => {
                  selectTab(event, tab);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {tabContent || 'No content yet :('}
      </div>
    </div>
  );
};
