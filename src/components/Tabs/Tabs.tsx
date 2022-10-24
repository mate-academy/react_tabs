import React, { useState } from 'react';
import className from 'classnames';
import { TabProps } from '../../Types/Type';
import { Tab } from '../Tab';

type Props = {
  tabs: TabProps[]
  setSelektedTab: (x: string) => void
};

export const Tabs: React.FC<Props> = ({ tabs, setSelektedTab }) => {
  const [ActiveTabs, setActiveTabs] = useState('tab-1');

  return (
    <ul>
      {tabs.map((tab) => (
        <li
          className={className({ 'is-active': ActiveTabs === tab.id })}
          data-cy="Tab"
          key={tab.id}
        >
          <Tab
            tab={tab}
            setActiveTabs={setActiveTabs}
            setSelektedTab={setSelektedTab}
          />
        </li>
      ))}
    </ul>
  );
};
