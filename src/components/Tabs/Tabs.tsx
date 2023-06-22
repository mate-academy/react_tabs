import { FC } from 'react';
import { Tab } from '../../types';
import { TabItem } from '../Tab/TabItem';

type Props = {
  tabs: Tab[] | undefined;
  selectedTabId: string;
  onTabSelected: (id: string) => void;
};

export const Tabs: FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs?.map(tabItem => (
          <TabItem
            key={tabItem.id}
            tabItem={tabItem}
            selectedTabId={selectedTabId}
            onTabSelected={onTabSelected}
          />
        ))}
      </ul>
    </div>
  );
};
