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
  const { id, title } = tab;

  const handleClick = () => {
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
      <a href={`#${id}`} data-cy="TabLink" onClick={handleClick}>
        {title}
      </a>
    </li>
  );
};
