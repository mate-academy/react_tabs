import React from 'react';
import './Tabs.scss';

type Props = {
  handleTabChange: (tab: Tab) => void;
  content: string;
  copyTabs: Tab[];
};

export const Tabs: React.FC<Props> = (props) => {
  return (
    <>
      <ul className="nav">
        {props.copyTabs.map(tab => (
          <div>
            <button
              type="button"
              key={tab.id}
              className="nav__item"
              onClick={() => props.handleTabChange(tab)}
            >
              {tab.title}
            </button>
          </div>
        ))}
      </ul>
      <div className="content">
        {props.content}
      </div>
    </>
  );
};
