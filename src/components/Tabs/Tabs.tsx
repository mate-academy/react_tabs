import { FC } from 'react';
import cn from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  onTabSelected: (tab: Tab) => void,
  selectedTabId: string,
};

export const Tabs: FC<Props> = ({
  tabs,
  onTabSelected,
  selectedTabId,
}) => {
  const visibleTab = tabs.find(tab => (
    tab.id === selectedTabId)) || tabs[0];

  const handleTabClick = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({
                'is-active': visibleTab.id === tab.id,
              })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleTabClick(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}

        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {visibleTab.content}
      </div>
    </div>
  );
};
