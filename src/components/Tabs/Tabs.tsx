import React, { Fragment } from 'react';
import './Tabs.scss';

interface Props {
  tabs: Tab[],
  isSelected: string,
  activeTab: (id:string) => void,
}

export const Tabs: React.FC<Props> = ({ tabs, isSelected, activeTab }) => {
  return (
    <div>
      <div className="tabs_wrap">
        {tabs.map(({ title }) => (
          <button
            type="button"
            onClick={() => {
              activeTab(title);
            }}
            className={`tab ${title === isSelected ? 'is_active' : ''} `}
            key={title}
          >
            {title}
          </button>
        ))}
      </div>
      <div className="content">
        {tabs.map(({ id, content, title }) => {
          return (
            <Fragment key={id}>
              {isSelected === title ? content : null}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
