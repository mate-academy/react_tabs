import React from 'react';
import { Tab } from '../../../types/Tab';

type Props = {
  tab: Tab;
  onTabSelected: (tab: Tab) => void;
};

export const TabInfo: React.FC<Props> = ({ tab, onTabSelected }) => {
  const { id, title } = tab;

  return (
    <a
      href={`#${id}`}
      data-cy="TabLink"
      onClick={() => onTabSelected(tab)}
    >
      {title}
    </a>
  );
};
