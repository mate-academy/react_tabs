import { FC, memo } from 'react';
import { Tab } from '../Tab';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
}

export const Tabs: FC<Props> = memo(
  ({ tabs, selectedTabId, onTabSelected }) => {
    return (
      <div className="Tabs">
        <ul className="Tabs__list">
          {tabs.map(tab => (
            <li className="Tabs__item" key={tab.id}>
              <Tab
                tab={tab}
                selectedTabId={selectedTabId}
                onTabSelected={onTabSelected}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  },
);
