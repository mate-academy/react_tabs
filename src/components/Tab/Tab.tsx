import React from 'react';
import { TabProps } from '../../Types/Type';

type Props = {
  tab: TabProps
  setSelektedTab: (x: TabProps) => void
};

export const Tab: React.FC<Props> = ({
  tab,
  setSelektedTab,
}) => {
  return (
    <a
      href="#tab-1"
      data-cy="TabLink"
      onClick={() => {
        setSelektedTab(tab);
      }}
    >
      {tab.title}
    </a>
  );
};
