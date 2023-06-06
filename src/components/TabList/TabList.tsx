import React from 'react';
import className from 'classnames';
import { Tab } from '../../Types/Type';
import { TabItem } from '../TabItem';

type Props = {
  tabs: Tab[]
  setSelektedTab: (clickTab: Tab) => void
  selectedTab: Tab
};

export const TabList: React.FC<Props> = ({
  tabs,
  setSelektedTab,
  selectedTab,
}) => {
  return (
    <ul>
      {tabs.map((tab) => (
        <li
          className={className({ 'is-active': selectedTab.id === tab.id })}
          data-cy="Tab"
          key={tab.id}
        >
          <TabItem
            tab={tab}
            setSelektedTab={setSelektedTab}
          />
        </li>
      ))}
    </ul>
  );
};
