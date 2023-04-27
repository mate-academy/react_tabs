import React from 'react';
import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab;
  selectedTab: Tab;
  onTabSelected: (tab: Tab) => void;
};

export const TabComponent: React.FC<Props> = ({
  tab,
  selectedTab,
  onTabSelected,
}) => {
  const handleTabClick = (clickedTab: Tab) => {
    if (clickedTab.id !== selectedTab.id) {
      onTabSelected(tab);
    }
  };

  const { id, title } = tab;

  return (
    <a
      href={`#${id}`}
      data-cy="TabLink"
      onClick={() => handleTabClick(tab)}
    >
      {title}
    </a>
  );
};
