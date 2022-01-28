import React from 'react';

type Props = {
  tabs: Tab[];
  selectTab: (tab: Tab) => void;
  selectedTabId: string;
};

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, selectTab, selectedTabId } = props;

  const onTabSelected = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      return selectTab(tab);
    }

    return 'null';
  };

  const findTab = (id: string) => (
    tabs.find(tab => tab.id === id) || null
  );

  return (
    <>
      <ul className="level-left pt-2">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className="pr-4"
          >
            <button
              type="button"
              onClick={() => onTabSelected(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <p className="pt-2">{findTab(selectedTabId)?.content}</p>
    </>
  );
};
