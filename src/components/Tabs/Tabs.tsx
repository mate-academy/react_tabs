import React from 'react';
import className from 'classnames';
import { TabProps } from '../../Types/Type';
import { Tab } from '../Tab';

type Props = {
  tabs: TabProps[]
  setSelektedTab: (clickTab: TabProps) => void
  selectedTab: TabProps
};

export const Tabs: React.FC<Props> = ({
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
          <Tab
            tab={tab}
            setSelektedTab={setSelektedTab}
          />
        </li>
      ))}
    </ul>
  );
};
