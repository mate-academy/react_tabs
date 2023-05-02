import classNames from 'classnames';
import { FC } from 'react';
import { Tab } from '../../types/Tab';

interface Props {
  tab: Tab,
  currentTabId: string,
  handleTabClick: (tab: Tab) => void,
}

export const TabInfo: FC<Props> = ({
  tab,
  currentTabId,
  handleTabClick,
}) => {
  return (
    <li
      className={classNames({ 'is-active': tab.id === currentTabId })}
      data-cy="Tab"
    >
      <a
        href={`#${tab.id}`}
        data-cy="TabLink"
        onClick={() => handleTabClick(tab)}
      >
        {tab.title}
      </a>
    </li>
  );
};
