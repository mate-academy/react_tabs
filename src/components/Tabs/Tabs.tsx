import { FC } from 'react';

import cn from 'classnames';

import { Tab } from '../../types';

type Props = {
  onTabSelected: (tabNr: Tab) => void,
  tabs: Tab[] | [],
  selectedTabId: string,
  // selectedTab: Tab,
};

export const Tabs: FC<Props> = ({
  onTabSelected,
  tabs,
  selectedTabId,
  // selectedTab,
}) => {
  const tabContent = tabs.find(tab => (
    selectedTabId === tab.id
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
          {/* <li
            className={cn(
              {
                'is-active': selectedTab.id === 'tab-1',
              },
            )}
            data-cy="Tab"
          >
            <a
              href="#tab-1"
              data-cy="TabLink"
              onClick={() => onTabSelected(1)}
            >
              Tab 1
            </a>
          </li>

          <li
            className={cn(
              {
                'is-active': selectedTab.id === 'tab-2',
              },
            )}
            data-cy="Tab"
          >
            <a
              href="#tab-2"
              data-cy="TabLink"
              onClick={() => onTabSelected(2)}
            >
              Tab 2
            </a>
          </li>

          <li
            className={cn(
              {
                'is-active': selectedTab.id === 'tab-3',
              },
            )}
            data-cy="Tab"
          >
            <a
              href="#tab-3"
              data-cy="TabLink"
              onClick={() => onTabSelected(3)}
            >
              Tab 3
            </a>
          </li> */}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabContent}
      </div>
    </div>
  );
};
