import React from 'react';
import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab;
  handleTabClick: (tab: Tab) => void;
};

export const TabComponent: React.FC<Props> = ({
  tab,
  handleTabClick,
}) => {
  const { id, title } = tab;

  return (
    <a
      href={`#${id}`}
      data-cy="TabLink"
      onClick={() => handleTabClick(tab)}
    >
      {title}
    </a>
  );
};
