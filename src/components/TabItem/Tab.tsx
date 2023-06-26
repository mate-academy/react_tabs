import { FC } from 'react';
import classNames from 'classnames';
import { Tab as TabType } from '../../types';

type Props = {
  tab: TabType;
  isActive: boolean;
  onTabSelect: (tab: TabType) => void;
};

export const Tab: FC<Props> = ({
  tab,
  isActive,
  onTabSelect,
}) => {
  const { id, title } = tab;

  return (
    <li
      data-cy="Tab"
      className={classNames({ 'is-active': isActive })}
    >
      <a
        href={`#${id}`}
        data-cy="TabLink"
        onClick={() => tab && onTabSelect(tab)}
      >
        {title}
      </a>
    </li>
  );
};
