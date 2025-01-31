import { Tab } from '../../App';

type TabProps = {
  tab: Tab;
  selectedTab: string;
  onTabSelected: (tab: Tab, event: React.MouseEvent<HTMLAnchorElement>) => void;
};

export const Tabs: React.FC<TabProps> = ({
  tab,
  selectedTab,
  onTabSelected,
}) => {
  return (
    <li className={tab.id === selectedTab ? 'is-active' : ''} data-cy="Tab">
      <a
        href={`#${tab.id}`}
        data-cy="TabLink"
        onClick={event => onTabSelected(tab, event)}
      >
        {tab.title}
      </a>
    </li>
  );
};
