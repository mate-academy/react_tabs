import { FC } from 'react';
import classNames from 'classnames';
import { Tab } from '../../interfaces/Tab';

interface Props {
  tab: Tab;
  onTabselected: (tab: Tab) => void;
  isActive: boolean;
}

export const TabInfo:FC<Props> = ({
  tab,
  onTabselected,
  isActive,
}) => {
  const handleSelect = () => {
    if (!isActive) {
      onTabselected(tab);
    }
  };

  return (
    <li
      className={classNames(
        { 'is-active': isActive },
      )}
      data-cy="Tab"
      key={tab.id}
    >
      <a
        href={`#${tab.id}`}
        data-cy="TabLink"
        onClick={handleSelect}
      >
        {tab.title}
      </a>
    </li>
  );
};
