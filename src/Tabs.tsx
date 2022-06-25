import React from 'react';
import './Tabs.scss';
import classnames from 'classnames';

type Tab = {
  id: string,
  title: string,
  content: string,
};

type Props = {
  tabs: Tab[],
  selected: Tab,
  onTabSelected: (selectedTab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({ tabs, selected, onTabSelected }) => {
  return (
    <>
      <div className="buttons is-centered container">
        {tabs.map(tab => (
          <button
            key={tab.id}
            type="button"
            className={classnames('button is-rounded', {
              'button__is-active': selected === tab,
            })}
            onClick={tab === selected ? undefined : () => onTabSelected(tab)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="container container-content">
        <p className="content" data-cy="tab-content">
          {selected.content}
        </p>
      </div>
    </>
  );
};
