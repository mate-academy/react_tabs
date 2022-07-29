import React from 'react';
import { Tab } from '../../react-app-env';

type Props = {
  tabs: Tab[];
  selected: string;
  setSelected: (id: string) => void;
};

export const Tabs: React.FC<Props> = ({ tabs, selected, setSelected }) => {
  return (
    <>
      {tabs.map(tab => (
        <li
          data-cy="tab-content"
          key={tab.id}
          className={tab.id === selected ? 'is-active' : ''}
        >
          <a
            href={`#${tab.id}`}
            onClick={() => {
              setSelected(tab.id);
            }}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </>
  );
};
