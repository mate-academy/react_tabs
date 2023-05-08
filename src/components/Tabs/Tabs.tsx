import { FC } from 'react';
import cn from 'classnames';
import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[];
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
}

export const Tabs: FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  const currentTab = tabs.find((tab) => tab.id === selectedTabId) || tabs[0];
  const { content } = currentTab;

  const handlerChange = (active: boolean, tab: Tab) => {
    if (!active) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const isActive = tab.id === currentTab.id;
            const { id, title } = tab;

            return (
              <li
                className={cn({
                  'is-active': isActive,
                })}
                data-cy="Tab"
                key={id}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    handlerChange(isActive, tab);
                  }}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </div>

  );
};
