import React from 'react';
import './Tabs.scss';

type Props = {
  handleTabChange: (tab: Tab) => void;
  content: string;
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({
  tabs,
  handleTabChange,
  content,
}) => {
  return (
    <>
      <ul className="Tabs">
        {tabs.map(tab => (
          <li className="Tabs__item">
            <button
              type="button"
              key={tab.id}
              className="Tabs__button"
              onClick={() => handleTabChange(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <div className="Tabs__content">
        {content}
      </div>
    </>
  );
};
