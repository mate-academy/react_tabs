import React from 'react';
import classNames from 'classnames';
import { TabType } from '../../types/Tab';

type Props = {
  tab: TabType,
  onTabSelected: (tab: TabType) => void,
  selectedTabId: string,
};

export const Tab: React.FC<Props> = (props) => {
  const {
    tab,
    onTabSelected,
    selectedTabId,
  } = props;

  const { id, title } = tab;
  const isActiveTab = tab.id === selectedTabId;

  const selectTab = () => {
    if (!isActiveTab) {
      onTabSelected(tab);
    }
  };

  return (
    <li
      className={classNames({
        'is-active': isActiveTab,
      })}
      data-cy="Tab"
    >
      <a
        href={`#${id}`}
        data-cy="TabLink"
        onClick={selectTab}
      >
        {title}
      </a>
    </li>
  );
};
