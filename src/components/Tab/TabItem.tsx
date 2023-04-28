import classNames from 'classnames';
import { Tab } from '../../types/Tab';

interface Props {
  tab: Tab;
  isActiveTab: boolean;
  onTabSelected: (tab: Tab) => void;

}
export const TabItem: React.FC<Props> = ({
  tab,
  isActiveTab,
  onTabSelected,
}) => {
  const handleSelect = () => {
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
      key={tab.id}
    >
      <a href={`#${tab.id}`} data-cy="TabLink" onClick={handleSelect}>
        {tab.title}
      </a>
    </li>
  );
};
