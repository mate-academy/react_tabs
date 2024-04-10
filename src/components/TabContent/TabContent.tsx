import React from 'react';
import { Tab } from '../Tabs';

type Props = {
  selectedTab: Tab;
};

export const TabContent: React.FC<Props> = ({ selectedTab }) => {
  return (
    <div className="block" data-cy="TabContent">
      {selectedTab.content}
    </div>
  );
};
