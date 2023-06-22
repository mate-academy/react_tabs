import { FC } from 'react';
import { Tab } from '../../types';
import { TabItem } from '../TabItem/TabItem';

type Props = {
  tabs: Tab[] | undefined;
  selectedTab: Tab;
  onTabSelected: (tab :Tab) => void;
};

export const Tabs: FC<Props> = ({ tabs, selectedTab, onTabSelected }) => {
  const { id, content } = selectedTab;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs?.map(tabItem => (
            <TabItem
              key={id}
              tabItem={tabItem}
              selectedTabId={id}
              onTabSelected={onTabSelected}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </div>
  );
};
