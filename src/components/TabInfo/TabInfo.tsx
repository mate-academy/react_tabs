import { FC } from 'react';
import cn from 'classnames';
import { Tab } from '../../types/Tab';

interface Props {
  id: string;
  isActive: boolean;
  title: string;
  tab: Tab;
  handleClick: (tab: Tab) => void;
}

export const TabInfo: FC<Props> = ({
  id,
  isActive,
  title,
  tab,
  handleClick,
}) => {
  return (
    <li
      data-cy="Tab"
      className={cn({ 'is-active': isActive })}
    >
      <a
        href={`#${id}`}
        data-cy="TabLink"
        onClick={() => handleClick(tab)}
      >
        {title}
      </a>
    </li>
  );
};
