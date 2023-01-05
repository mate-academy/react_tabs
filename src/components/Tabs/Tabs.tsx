import React from 'react';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectId: string,
  onTabSelected: any,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectId,
  onTabSelected,
}) => {
  return (
    <ul>
      {tabs.map(tab => {
        const { id, title } = tab;

        const handleChange = () => {
          onTabSelected(tab);
        };

        return (
          <li
            className={selectId === id ? 'is-active' : ''}
            data-cy="Tab"
            key={id}
          >
            <a
              href={`#${id}`}
              data-cy="TabLink"
              onClick={handleChange}
            >
              {title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
