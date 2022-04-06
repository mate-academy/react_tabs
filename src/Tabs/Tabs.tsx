import React from 'react';
import { TabsControl } from '../TabsControl/TabsControl';

import './Tabs.scss';

interface Props {
  tabs: Tab[],
  selectedId: string,
  selectTab: (newTab: string) => void,
}

export const Tabs: React.FC<Props> = React.memo(({ tabs, selectedId, selectTab }) => {
  return (
    <>
      <TabsControl
        tabs={tabs}
        selectedId={selectedId}
        selectTab={selectTab}
      />
      <p className="text">
        {tabs.find(tab => tab.id === selectedId)?.content}
      </p>
    </>
  );
});
