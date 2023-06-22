import { FC } from 'react';
import classNames from 'classnames';
import { Tab } from '../../types';

type Props = {
  tabItem: Tab | undefined;
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const TabItem: FC<Props> = ({
  tabItem,
  selectedTabId,
  onTabSelected,
}) => {
  const isActive = tabItem?.id === selectedTabId;

  return (
    <li
      data-cy="Tab"
      className={classNames({ 'is-active': isActive })}
    >
      <a
        href={`#${tabItem?.id}`}
        data-cy="TabLink"
        onClick={() => (!isActive && tabItem) && onTabSelected(tabItem)}
      >
        {tabItem?.title}
      </a>
    </li>
  );
};
