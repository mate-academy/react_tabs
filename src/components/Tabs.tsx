import React from 'react';
import classnames from 'classnames';

interface Props {
  tabs: Tab[];
  content: string;
  tabId: string;
  onSelect: (tab: Tab) => void;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  tabId,
  content,
  onSelect,
}) => {
  return (
    <>
      <ul className="tabList">
        {tabs.map(tab => {
          const isActive = tabId === tab.id;

          return (
            <li key={tab.id}>
              <button
                className={classnames('button', { active: isActive })}
                type="button"
                onClick={() => onSelect(tab)}
              >
                {tab.title}
              </button>
            </li>
          );
        })}
      </ul>
      <p className="text">{content}</p>
    </>
  );
};
