import { FC } from 'react';
import classNames from 'classnames';
import { Tab } from '../../types';

type Props = {
  tabItem: Tab | undefined;
  selectedTabId: string;
  onTabSelected: (id: string) => void;
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
        onClick={() => {
          return !isActive && tabItem?.id ? onTabSelected(tabItem.id) : null;
        }}
      >
        {tabItem?.title}
      </a>
    </li>
  );
};
