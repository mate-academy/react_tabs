import classNames from 'classnames';
import React from 'react';
import { SetSelectedTab } from '../../types/SetselectedTab';
import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab,
  setSelectedTab: SetSelectedTab,
  activeId: string,
};

export const TabInfo: React.FC<Props> = ({
  tab,
  setSelectedTab,
  activeId,
}) => {
  const { id, title } = tab;
  const isActive = activeId === id;

  const handleOnClick = () => {
    setSelectedTab(tab);
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
