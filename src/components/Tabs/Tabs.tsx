import { FC } from 'react';
import { Tab } from '../../types/Tab';
import { TabComponent } from '../Tab/Tab';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
}

export const Tabs: FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const handleTabSelected = (tab: Tab) => {
    onTabSelected(tab);
  };

  const correctSelectedTabId = tabs.some((tab) => tab.id === selectedTabId)
    ? selectedTabId
    : tabs[0].id;

  const selectedContent = tabs.find((tab) => (
    tab.id === correctSelectedTabId
  ))?.content;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <TabComponent
              tab={tab}
              isActive={tab.id === correctSelectedTabId}
              onTabClick={handleTabSelected}
            />
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {selectedContent}
      </div>
    </div>
  );
};
