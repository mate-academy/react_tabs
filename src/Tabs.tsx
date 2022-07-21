import { FC } from 'react';

interface Props {
  tabs: Tab[],
  selectedTab: Tab,
  onTabSelected: (tab: Tab) => void,
}

export const Tabs: FC<Props> = ({ tabs, onTabSelected, selectedTab }) => {
  return (
    <>
      {tabs.map(tab => (
        <button
          className={`btn ${selectedTab.id === tab.id ? 'active' : ''}`}
          key={tab.id}
          type="button"
          onClick={() => onTabSelected(tab)}
        >
          {tab.title}
        </button>
      ))}
      <p className="content" data-cy="tab-content">{selectedTab.content}</p>
    </>
  );
};
