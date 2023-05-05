import { FC } from 'react';
import { Tab } from '../../types/Tab';
import { TabInfo } from '../TabInfo';

type Props = {
  tabs: Tab[];
  selectedTabId: Tab;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: FC<Props> = ({ tabs, onTabSelected, selectedTabId }) => {
  const handleClick = (tab: Tab) => {
    if (tab.id !== selectedTabId.id) {
      onTabSelected(tab);
    }
  };

  const foundTab = tabs.find(tab => (
    tab.id === selectedTabId.id)) || tabs[0];

  if (!foundTab) {
    onTabSelected(tabs[0]);
  }

  const currentTab = foundTab;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;
            const isActive = selectedTabId.id === id;

            return (
              <TabInfo
                key={id}
                id={id}
                isActive={isActive}
                title={title}
                tab={tab}
                handleClick={handleClick}
              />
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {`${currentTab.content}`}
      </div>
    </div>
  );
};
