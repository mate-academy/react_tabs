import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab,
  onTabSelected: (tab: Tab) => void,
  isSelected: boolean,
};

export const TabComponent: React.FC<Props> = ({
  tab,
  onTabSelected,
  isSelected,
}) => {
  const handleClick = () => {
    if (!isSelected) {
      onTabSelected(tab);
    }
  };

  return (
    <li
      key={tab.id}
      data-cy="Tab"
      className={classNames({
        'is-active': isSelected,
      })}
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
