import React, { FC } from 'react';
import classNames from 'classnames';
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
      className={classNames({
        'is-active': isActive,
      })}
      data-cy="Tab"
      key={tab.id}
    >
      <a
        href={`#${tab.id}`}
        data-cy="TabLink"
        onClick={handleTabClick}
      >
        {tab.title}
      </a>
    </li>
  );
};
