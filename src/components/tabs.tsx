import React from 'react';

type HandleSelected = (event: React.ChangeEvent<HTMLInputElement>) => void;

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: HandleSelected;
};

export const Tabs:React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => (
  <form>
    {tabs.map(tab => (
      <React.Fragment key={tab.id}>
        <label htmlFor={tab.id}>{tab.title}</label>
        <input
          type="radio"
          name={tab.title}
          key={tab.id}
          id={tab.id}
          value={tab.id}
          checked={selectedTabId === tab.id}
          onChange={onTabSelected}
        />
      </React.Fragment>
    ))}
  </form>
);
