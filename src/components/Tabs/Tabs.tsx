import type { FC } from 'react';
import cn from 'classnames';
import type { Tab } from '../../App';

type Props = {
  tab: Tab;
  onSelect: (tabId: string) => void;
  isActive: boolean;
};

export const Tabs: FC<Props> = ({ tab, onSelect, isActive }) => (
  <li
    className={cn({ 'is-active': isActive })}
    data-cy="Tab"
  >
    <a
      href={tab.id}
      data-cy="TabLink"
      onClick={(event) => {
        event.preventDefault();
        onSelect(tab.id);
      }}
    >
      {tab.title}
    </a>
  </li>
);
