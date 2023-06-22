import { FC } from 'react';
import classNames from 'classnames';
import { Tab } from '../../types';

type Props = {
  tabItem: Tab;
  selectedTab: Tab;
  onTabSelect: (tab: Tab) => void;
};

export const TabItem: FC<Props> = ({
  tabItem,
  selectedTab,
  onTabSelect,
}) => {
  const { id, title } = tabItem;
  const isActive = id === selectedTab.id;

  return (
    <li
      data-cy="Tab"
      className={classNames({ 'is-active': isActive })}
    >
      <a
        href={`#${id}`}
        data-cy="TabLink"
        onClick={() => tabItem && onTabSelect(tabItem)}
      >
        {title}
      </a>
    </li>
  );
};
