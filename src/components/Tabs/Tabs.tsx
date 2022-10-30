import { FC } from 'react';

import cn from 'classnames';

import { Tab } from '../../types';

type Props = {
  onTabSelected: (tabNr: Tab) => void,
  tabs: Tab[] | [],
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

  const isIdCorrect:boolean = tabs.some((tab:Tab) => (
    tab.id === selectedTabId
  ));

  return (
    <div className="TabsComponent" data-cy="tab-content">
      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map((tab, index) => {
              const { id, title } = tab;

              return (
                <li
                  className={cn(
                    {
                      'is-active':
                      selectedTabId === id
                      // select first tab if selectedTabId is incorrect
                      || (!isIdCorrect && index === 0),
                    },
                  )}
                  data-cy="Tab"
                  key={id}
                >
                  <a
                    href={`#${id}`}
                    data-cy="TabLink"
                    onClick={() => {
                      if (id !== selectedTabId) {
                        onTabSelected(tab);
                      }
                    }}
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
