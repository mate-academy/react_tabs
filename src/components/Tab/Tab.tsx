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
      <button
        type="button"
        className="no-style-button"
        onClick={() => setActiveTabId(id)}
        tabIndex={0}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            setActiveTabId(id);
          }
        }}
      >
        <a href={`#${id}`} data-cy="TabLink">
          {title}
        </a>
      </button>
    </li>
  );
};
