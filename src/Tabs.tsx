import React from 'react';
import { Tab } from './react-app-env';

interface Props {
  tabs: Tab[],
  selected: Tab,
  setSelected: (tad: Tab) => void,
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selected,
  setSelected,
}) => {
  return (
    <div className="container">
      <h1 className="title">
        Selected tab is&nbsp;
        {selected.title}
      </h1>

      {tabs.map(tab => (
        <button
          type="button"
          value={tab.id}
          className={
            tab.id === selected.id
              ? 'container__button--focus container__button'
              : 'container__button'
          }
          key={tab.id}
          onClick={() => {
            setSelected(tab);
          }}
        >
          {tab.title}
        </button>
      ))}
      <input
        type="text"
        className="container__border"
        disabled
      />

      <p className="content">
        {selected.content}
      </p>
    </div>
  );
};
