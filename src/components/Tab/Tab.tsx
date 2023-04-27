import React from 'react';
import classnames from 'classnames';
import { Tab } from '../../types/Tab';

interface Props {
  currentTab: Tab;
  selectedTabId: string;
  onSelect: (tab: Tab) => void;
}
export const TabComponent: React.FC<Props> = ({
  currentTab,
  onSelect,
  selectedTabId,
}) => {
  const handleTab = () => {
    if (currentTab.id !== selectedTabId) {
      onSelect(currentTab);
    }
  };

  return (
    <li
      key={currentTab.id}
      data-cy="Tab"
      className={classnames(
        { 'is-active': currentTab.id === selectedTabId },
      )}

    >
      <a
        href={`#${currentTab.id}`}
        data-cy="TabLink"
        onClick={handleTab}
      >
        {currentTab.title}
      </a>
    </li>
  );
};
