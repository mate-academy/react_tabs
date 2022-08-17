import { FC } from 'react';
import cn from 'classnames';
import { Tab } from '../../Types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (newTab: Tab) => void,
};

export const Tabs: FC<Props> = (props) => {
  const {
    tabs,
    selectedTabId,
    onTabSelected,
  } = props;

  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;

            return (
              <li
                className={cn(
                  { 'is-active': tab.id === selectedTabId },
                )}
                key={id}
              >
                <a
                  href={`#${id}`}
                  onClick={
                    () => {
                      if (tab.id !== selectedTabId) {
                        onTabSelected(tab);
                      }
                    }
                  }
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {selectedTab.content}
      </div>
    </div>
  );
};
