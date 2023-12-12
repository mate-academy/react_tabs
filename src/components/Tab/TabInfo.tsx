import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab,
  isActive: boolean,
  onTabSelected: (tabId: string) => void,
};

export const TabInfo = ({ tab, isActive, onTabSelected }:Props) => {
  return (
    <li
      className={isActive ? 'is-active' : ''}
      data-cy="Tab"
    >
      <a
        href={`#${tab.id}`}
        data-cy="TabLink"
        onClick={() => onTabSelected(tab.id)}
      >
        {tab.title}
      </a>
    </li>
  );
};
