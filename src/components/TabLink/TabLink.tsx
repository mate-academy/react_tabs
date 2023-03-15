import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab,
  isActive: boolean,
  onTabSelected: (id: Tab) => void,
};

export const TabLink: React.FC<Props> = (
  {
    tab,
    isActive,
    onTabSelected,
  },
) => {
  const {
    id,
    title,
  } = tab;

  const handleTabClick = () => {
    if (!isActive) {
      onTabSelected(tab);
    }
  };

  return (
    <li
      className={classNames({ 'is-active': isActive })}
      data-cy="Tab"
    >
      <a
        href={`#${id}`}
        data-cy="TabLink"
        onClick={handleTabClick}
      >
        {title}
      </a>
    </li>
  );
};
