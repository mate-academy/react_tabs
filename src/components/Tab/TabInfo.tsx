import classNames from 'classnames';
import { Tab } from '../../types/Tab';

interface Props {
  tab: Tab,
  onTabClick: (id: string) => void,
  selectedTab: Tab,
}

export const TabInfo: React.FC<Props> = ({
  tab,
  onTabClick,
  selectedTab,
}) => {
  const handleTabClick = (id: string) => {
    if (selectedTab.id !== id) {
      onTabClick(id);
    }
  };

  return (
    <li
      className={classNames({ 'is-active': selectedTab.id === tab.id })}
      data-cy="Tab"
      key={tab.id}
    >
      <a
        href={`#${tab.id}`}
        data-cy="TabLink"
        onClick={() => {
          handleTabClick(tab.id);
        }}
      >
        {tab.title}
      </a>
    </li>
  );
};
