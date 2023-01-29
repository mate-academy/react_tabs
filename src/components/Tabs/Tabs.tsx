import { FC } from 'react';

import cn from 'classnames';

import { Tab } from '../../types';

type Props = {
  onTabSelected: (tabData: Tab) => void,
  tabs: Tab[],
  selectedTabId: string,
};

export const Tabs: FC<Props> = ({
  onTabSelected,
  tabs,
  selectedTabId,
}) => {
  const tabContent = tabs.find(tab => (
    tab.id === selectedTabId
  ))?.content;

  const isIdCorrect: boolean = tabs.some((tab: Tab) => (
    tab.id === selectedTabId
  ));

  const handleTabClick = (id: string, tab: Tab) => {
    if (id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div className="TabsComponent" data-cy="tab-content">
      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map((tab, index) => {
              const { id, title } = tab;

              const shouldTabBeMarked = (selectedTabId === id
                // select first tab if selectedTabId is incorrect
                || (!isIdCorrect && index === 0));

              return (
                <li
                  className={cn(
                    {
                      'is-active': shouldTabBeMarked,
                    },
                  )}
                  data-cy="Tab"
                  key={id}
                >
                  <a
                    href={`#${id}`}
                    data-cy="TabLink"
                    onClick={() => handleTabClick(id, tab)}
                  >
                    {title}
                  </a>
                </li>
              );
            })
          }
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabContent}
      </div>
    </div>
  );
};
