import React from 'react';
import { Tab } from '../../types/Tab';
import './Tabs.scss';

type Props = {
  tabs: Tab[];
  onSelect: (select: Tab) => void;
  selectedTabId: string;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  onSelect,
  selectedTabId,
}) => {
  return (
    <div className="Tabs tabs is-toggle is-toggle-rounded">
      <ul>
        {tabs.map(tab => (
          <li
            className="Tabs__selected"
            key={tab.id}
          >
            <a href={`#${tab.id}`}>
              <span>
                <button
                  className="Tabs__button"
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    onSelect(tab);
                  }}
                >
                  {tab.title}
                </button>
              </span>
            </a>
            {selectedTabId === tab.id && (
              <p className="Tabs__content">
                {tab.content}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
