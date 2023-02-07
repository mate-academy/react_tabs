import classNames from 'classnames';
import React from 'react';
import { SetSelectedTab } from '../../types/SetselectedTab';
import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab,
  onTabSelected: SetSelectedTab,
  selectedTabId: string,
};

export const TabInfo: React.FC<Props> = ({
  tab,
  onTabSelected,
  selectedTabId,
}) => {
  const { id, title } = tab;
  const isActive = selectedTabId === id;

  const handleOnClick = () => {
    if (!isActive) {
      onTabSelected(tab);
    }
  };

  return (
    <li
      className={classNames({ 'is-active': isActive })}
      data-cy="Tab"
    >
      <a
        href={`#${id}`}
        data-cy="TabLink"
        onClick={handleOnClick}
      >
        {title}
      </a>
    </li>
  );
};
