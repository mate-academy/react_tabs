import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab,
  isActive: boolean,
  onTabSelected: (tab: Tab) => void,
};

export const TabInfo = ({ tab, isActive, onTabSelected }:Props) => {
  const handleClick = () => (
    !isActive && onTabSelected(tab)
  );

  return (
    <li
      className={isActive ? 'is-active' : ''}
      data-cy="Tab"
    >
      <a
        href={`#${tab.id}`}
        data-cy="TabLink"
        onClick={handleClick}
      >
        {tab.title}
      </a>
    </li>
  );
};
