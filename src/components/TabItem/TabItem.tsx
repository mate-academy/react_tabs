import React from 'react';
import { Tab } from '../../Types/Type';

type Props = {
  tab: Tab
  setSelektedTab: (x: Tab) => void
};

export const TabItem: React.FC<Props> = ({
  tab,
  setSelektedTab,
}) => {
  return (
    <a
      href={`#${tab.id}`}
      data-cy="TabLink"
      onClick={() => {
        setSelektedTab(tab);
      }}
    >
      {tab.title}
    </a>
  );
};
