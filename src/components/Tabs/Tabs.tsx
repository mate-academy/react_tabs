import React from 'react';
import cn from 'classnames';

type Tab = {
  id: string,
  title: string,
  content: string,
};

interface Props {
  tabs: Tab[],
  activeTabId: string,
  onTabSelected: CallableFunction
}

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, activeTabId, onTabSelected } = props;
  const selectedTab = tabs.filter(tab => activeTabId === tab.id);

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn(`${(tab.id === activeTabId) && 'is--active'}`)}
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                onClick={() => {
                  if (tab.id !== activeTabId) {
                    onTabSelected(tab);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {selectedTab[0].content}
      </div>
    </div>
  );
};
