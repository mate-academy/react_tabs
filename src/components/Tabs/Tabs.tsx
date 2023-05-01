import { FC } from 'react';
import { Tab } from '../../types/Tab';
import { TabInfo } from '../TabInfo';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: FC<Props> = ({ tabs, onTabSelected, selectedTabId }) => {
  const handleClick = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  const foundTab = tabs.find(tab => tab.id === selectedTabId);

  if (!foundTab) {
    onTabSelected(tabs[0]);
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;
            const isActive = selectedTabId === id;

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
        {`${foundTab?.content}`}
      </div>
    </div>
  );
};
