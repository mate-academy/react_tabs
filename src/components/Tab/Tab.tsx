import React from 'react';
import { TabProps } from '../../Types/Type';

type Props = {
  tab: TabProps
  setActiveTabs: (x: string) => void
  setSelektedTab: (x: string) => void
};

export const Tab: React.FC<Props> = ({
  tab,
  setActiveTabs,
  setSelektedTab,
}) => {
  return (
    <a
      href="#tab-1"
      data-cy="TabLink"
      onClick={() => {
        setSelektedTab(tab.id);
        setActiveTabs(tab.id);
      }}
    >
      {tab.title}
    </a>
  );
};
