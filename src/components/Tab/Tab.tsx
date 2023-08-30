import React from 'react';
import { TabProps } from '../../utils/types';

export const Tab: React.FC<TabProps> = ({
  isActive,
  title,
  id,
  setActiveTabId,
}) => {
  return (
    <li className={isActive ? 'is-active' : ''} data-cy="Tab">
      <a
        href={`#${id}`}
        data-cy="TabLink"
        onClick={() => setActiveTabId(id)}
      >
        {title}
      </a>
    </li>
  );
};
