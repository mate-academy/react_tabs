import React, { FC } from 'react';
import { Tab } from '../../types/Tab';

interface Props {
  tab: Tab;
  isActive: boolean;
  onTabClick: (tab: Tab) => void;
}

export const TabComponent: FC<Props> = ({
  tab,
  isActive,
  onTabClick,
}) => {
  const handleTabClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (!isActive) {
      onTabClick(tab);
    }
  };

  return (
    <li
      className={isActive ? 'is-active' : ''}
      data-cy="Tab"
      key={tab.id}
    >
      <a
        href={`#${tab.id}`}
        data-cy="TabLink"
        onClick={(event) => handleTabClick(event)}
      >
        {tab.title}
      </a>
    </li>
  );
};
