import { FC } from 'react';
import { Tab } from '../../types/Tab';

interface Props {
  tab: Tab,
  isActive: boolean,
  onTabSelected: (tab: Tab) => void,
}

export const TabInfo: FC<Props> = ({
  tab,
  isActive,
  onTabSelected,
}) => {
  const handleTabClick = () => {
    if (!isActive) {
      onTabSelected(tab);
    }
  };

  return (
    <li
      className={isActive ? 'is-active' : ''}
      data-cy="Tab"
    >
      <a
        href={`#${tab.id}`}
        data-cy="TabLink"
        onClick={handleTabClick}
      >
        {tab.title}
      </a>
    </li>
  );
};
